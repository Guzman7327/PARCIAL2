import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AspitanteComponent } from './curso.component'; // Correcto, porque está en la misma carpeta
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursoService } from '../../services/curso.service'; // Asegúrate de que la ruta es correcta
import { CouchdbService } from '../../services/couchdb.service'; // Asegúrate de que la ruta es correcta
describe('CursoComponent', () => {
  let component: CursoComponent;
  let fixture: ComponentFixture<CursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ CursoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener una lista de cursos vacía al inicio', () => {
    expect(component.cursos.length).toBe(0);
  });
});

describe('AspiranteComponent', () => {
  let component: AspiranteComponent;
  let fixture: ComponentFixture<AspiranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspiranteComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ AspiranteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deberia crear el componente", () => {
    expect(component).toBeTruthy();
  });

  it("deberia tener una lista de aspirantes vacia al inicio", () => {
    expect(component.aspirantes.length).toBe(0);
  });
});
