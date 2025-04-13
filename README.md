# ⏳ React Countdown Timer

Este es un componente de temporizador regresivo (`Countdown Timer`) hecho con **React** y **Tailwind CSS**. Muestra el tiempo restante hasta una fecha límite específica y se actualiza automáticamente cada segundo.

## 🖼️ Vista previa

El componente muestra:

- ⏰ Un reloj con formato `HH:MM:SS`.
- 📅 Un número de días grande de fondo con estilo translúcido.
- 🔔 Un mensaje de "Time is up!" cuando el tiempo se ha agotado.

## 🚀 Instalación

```bash
git clone https://github.com/Croking09/Timer
cd Timer
npm install
npm run dev
```

## 📜 Instrucciones

Para cambiar la fecha debes editar manualmente el archivo `src/App.js` y pasar al componente `Timer` una fecha distinta. Por ejemplo:

```javascript
<Timer limitDate={new Date("2025-04-15T23:38:00")}/>;
```