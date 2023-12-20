import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MukButtonComponent,
  MukThemePalette,
  MukButtonTypes,
  ButtonType,
  IButton,
} from "ngx-mui-kit/components/muk-button";
import { MukInputComponent } from 'ngx-mui-kit/components/muk-form/muk-fields/muk-input';
import { MukDropDownComponent } from 'ngx-mui-kit/components/muk-form/muk-fields/muk-drop-down';
import { Validators } from '@angular/forms';
import { FormFieldDropdown, FormFieldInput } from 'ngx-mui-kit/components/muk-form/classes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MukButtonComponent, MukDropDownComponent, MukInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stc-library-demo';
  buttonConfig: IButton = {
    text: 'Add',
    isMukButton: true,
    isLoading: false,
    color: MukThemePalette.Primary,
    matType: MukButtonTypes.Rounded,
    isDisabled: true,
    type: ButtonType.Button,
    onClick: (e: any) => {
      console.log('event', e)
    }
  }

  formField = new FormFieldDropdown({
    label: 'Users',
    placeholder: 'Please Select User',
    key: 'users',
    value: '',
    validators: [Validators.required],
    onChange: (e: any) => console.log("onChange", e),
    class: 'col-md-6',
    fieldConfig: {
      isWhiteMode: true,
      isDisplayChips: true,
      isLoading: false,
      isDisplayButton: false,
      isMultiple: true,
      isSearchable: false,
      textButton: 'Search',
      searchValue: 'Mohammed',
      onRemove: (e: any) => console.log('remove', e),
      onButtonClick: (e: any) => console.log(e),
      onScroll: (e: any) => console.log("onScroll", e),
      onSearch: (e: any) => console.log("onSearch", e),
      options: [
        { text: 'valuel', name: 'label', answerOrder: 1 },
        { text: 'value2', name: 'label2', answerOrder: 1 },
        { text: 'value3', name: 'label3', answerOrder: 1 },
        { text: 'value4', name: 'label4', answerOrder: 1 },
      ],
      optionsConfig: {
        labelPath: "name",
        valuePath: "text"
      },
      searchConfig: {
        placeholder: "TEST TEST TEST",
        noEntriesFound: ""
      },
    },
  })
  passwordInput = new FormFieldInput({
    label: 'Password',
    placeholder: 'Please Enter Your Password Here.',
    key: 'password',
    value: '',
    class: 'col-md-12',
    parent: 'one',
    validators: [Validators.required],
    fieldConfig: {
      type: 'password',
    }
  })
}
