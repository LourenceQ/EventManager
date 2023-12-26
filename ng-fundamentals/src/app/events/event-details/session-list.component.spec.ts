import { SessionListComponent } from './session-list.component'
import { VoterService } from './voter.service'
import { ISession } from '../shared'
import { Observable, of } from 'rxjs'

describe('SessionLitComponent', () => {
  let component: SessionListComponent
  let mockAuthService, mockVoterService

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService)
  })

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 3', level: 'beginner' },
      ]

      component.filterBy = 'intermediate'
      component.sortBy = 'name'
      component.eventId = 3

      component.ngOnChanges()

      expect(component.visibleSessions.length).toBe(2)
    })
  })
})
