import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG imports

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import { TreeModule } from 'primeng/tree';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  exports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    TabViewModule,
    SidebarModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    InputSwitchModule,
    DropdownModule,
    MegaMenuModule,
    MenuModule,
    PanelMenuModule,
    BadgeModule,
    CarouselModule,
    TableModule,
    DataViewModule,
    BreadcrumbModule,
    SliderModule,
    InputNumberModule,
    AccordionModule,
    TreeModule,
    PaginatorModule,
    ToastModule,
    CalendarModule
  ]
})
export class PrimengLibModule { }
