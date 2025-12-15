# Sistema de Temas SCSS

## Cómo usar las variables en tus componentes

### 1. Importar en el archivo SCSS del componente

```scss
@use '../../../styles/themes' as *;

.mi-componente {
  background-color: $bg-primary;
  color: $text-primary;
  padding: $spacing-md;
  border-radius: $radius-md;
}
```

### 2. Variables disponibles

#### Colores
- `$primary`, `$primary-light`, `$primary-dark`
- `$accent`, `$accent-light`, `$accent-dark`  
- `$warn`, `$success`, `$info`

#### Fondos
- `$bg-primary`, `$bg-secondary`, `$bg-tertiary`
- `$bg-sidebar`, `$bg-content`

#### Texto
- `$text-primary`, `$text-secondary`, `$text-disabled`

#### Layout
- `$sidebar-width`, `$header-height`, `$footer-height`
- `$breakpoint-xs`, `$breakpoint-sm`, `$breakpoint-md`

#### Espaciado
- `$spacing-xs` (4px), `$spacing-sm` (8px), `$spacing-md` (16px)
- `$spacing-lg` (24px), `$spacing-xl` (32px)

#### Radius
- `$radius-sm` (4px), `$radius-md` (8px), `$radius-lg` (12px)

#### Sombras
- `$shadow-sm`, `$shadow-md`, `$shadow-lg`

### 3. Mixins disponibles

#### Responsive
```scss
@include mobile {
  // Estilos para móvil
}

@include tablet {
  // Estilos para tablet
}

@include desktop {
  // Estilos para desktop
}
```

#### Flexbox
```scss
@include flex-center;
@include flex-between;
@include flex-column;
```

#### Efectos
```scss
@include hover-lift;
@include transition(all);
@include card($spacing-lg);
```

#### Scrollbar personalizado
```scss
@include custom-scrollbar();
```

### 4. Ejemplo completo

```scss
@use '../../../styles/themes' as *;

.product-card {
  @include card($spacing-lg);
  @include hover-lift;
  
  .title {
    font-size: $font-size-lg;
    font-weight: $font-weight-medium;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }
  
  .price {
    color: $primary;
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
  }
  
  @include mobile {
    padding: $spacing-md;
  }
}
```

## Modificar el tema

Para cambiar colores globalmente, edita: `src/styles/themes/_variables.scss`

Los cambios se aplicarán automáticamente a toda la aplicación.
