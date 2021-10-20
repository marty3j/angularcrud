import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EmployeeService } from '../employees.service';

@Component({
  selector: 'app-updateadd',
  templateUrl: './updateadd.component.html',
  styleUrls: ['./updateadd.component.css']
})

export class UpdateaddComponent implements OnInit {

  @Output()
  sendDataToParent = new EventEmitter();

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Full Name',
        placeholder: 'Juan Dela Cruz',
        required: true,
      },
    },
    {
      key: "email",
      type: "input",
      templateOptions: {
        label:
          "Email",
        required: true
      },
      validators: {
        ip: {
          expression: c => !c.value || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(c.value),
          message: (error, field: FormlyFieldConfig) =>
            `"${field.formControl.value
            }" is not a valid Email Address.`
        }
      }
    },
    {
      key: 'sex',
      type: 'select',
      templateOptions: {
        label: 'Sex',
        options: [
          { id: 'Male', name: 'Male' },
          { id: 'Female', name: 'Female' },
        ],
        valueProp: 'id',
        labelProp: 'name',
        required: true
      },
    },
    {
      key: 'status',
      type: 'select',
      templateOptions: {
        label: 'Status',
        options: [
          { id: 'Single', name: 'Single' },
          { id: 'Married', name: 'Married' },
        ],
        valueProp: 'id',
        labelProp: 'name',
        required: true
      },
    },


  ];

  registerForm: FormGroup;
  submitted = false;
  buttonLabel: string = "";
  actionTitle: string;
  @Input() argActionId: any;
  recentAction: string;
  constructor(private formBuilder: FormBuilder,
    private employeesService: EmployeeService
  ) { }

  ngOnInit() {
    console.log('argActionId=', this.argActionId[0], " ", this.argActionId[1]);
    this.recentAction = this.argActionId[0];
    //if (!this.recentAction = "U") {
    if (this.argActionId[0] == 'A') {
      this.actionTitle = "Adding Employee";
      this.buttonLabel = "Add Employee";

    }
    if (this.argActionId[0] == 'U') {
      this.actionTitle = "Updating Employee";
      this.buttonLabel = "Update Employee"

      let id = parseInt(this.argActionId[1]);
      this.employeesService.getEmployee(id).subscribe(data => {
        console.log('employee will be update', data);
        //this.router.navigate(['/employees-list'])
        this.form.setValue({
          name: data.name,
          email: data.email,
          sex: data.sex,
          status: data.status
        });
      })
      console.log('updated form values=', this.form.value);
    }
    //}
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sex: ['', Validators.required],
      status: ['', Validators.required],

    })
  }
  get f() { return this.registerForm.controls; }
  onSubmit(data) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }


    if (this.argActionId[0] == 'A') {
      console.log('Adding..');

      this.employeesService.addEmployee(data).subscribe((data: {}) => {
        console.log(data);
        this.someEventss();
      })
    }
    if (this.argActionId[0] == 'U') {
      console.log('Updating..', this.form.value);
      let id = parseInt(this.argActionId[1]);
      this.employeesService.updateEmployee(id, this.form.value).subscribe(data => {
        console.log(data);
        this.someEventss();
      })
    }

  }
  someEventss() {
    console.log('child event');
    this.sendDataToParent.emit();
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
