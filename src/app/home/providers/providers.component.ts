import {Component} from '@angular/core';
import {Provider} from '../shared/provider.model';
import {ProviderCreationDialogComponent} from './provider-creation-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  templateUrl: 'providers.component.html'
})
export class ProvidersComponent {

  provider: Provider;

  title = 'Providers management';
  columns = ['company', 'nif', 'phone'];
  data: Provider[];

  constructor(private dialog: MatDialog) {
    this.provider = {company: null, nif: null, phone: null};
    this.data = null;
  }

  search() {
    // TODO implement search with fields
  }

  resetSearch() {
    this.provider = {company: null, nif: null, phone: null};
  }

  create() {
    // TODO
    this.dialog.open(ProviderCreationDialogComponent);
  }

  read(provider: Provider) {
    // TODO
  }

  update(provider: Provider) {
    // TODO
  }

  delete(provider: Provider) {
    // TODO
  }

}