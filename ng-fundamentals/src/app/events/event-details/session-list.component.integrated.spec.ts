import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SessionListComponent } from "./session-list.component";
import { DebugElement } from "@angular/core";
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "./voter.service";

describe('SessionListComponent', () => {
  
  let mockAuthService
  let mockVoterService
  let fixture: ComponentFixture<SessionListComponent>
  let component: SessionListComponent
  let element: HTMLElement
  let debugEl: DebugElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SessionListComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService},
        { provide: VoterService, useValue: mockVoterService},
      ]
    })

    fixture = TestBed.createComponent(SessionListComponent)
    component = fixture.componentInstance
    debugEl = fixture.debugElement
    element = fixture.nativeElement
  })

  describe('initial display', () => {
    
  })  
});
