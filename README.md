# Hero landing page

Статическая hero-секция лендинга адвоката, собранная по `Референс 2.png` и инструкциям `1-start.md`, `2-structure.md`.

## Запуск

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Откройте `http://localhost:8080/`.

## Файлы

- `index.html` — семантическая структура header и hero;
- `styles.css` — дизайн-токены, desktop-first стили и адаптивность;
- `script.js` — доступное мобильное меню;
- `assets/images/hero-lawyer-office-empty.png` — кабинетный фон hero без встроенного текста;
- `assets/images/selivanov-real-portrait.gif` — исходная фотография адвоката, наложенная без перерисовки лица;
- `DEVELOPMENT_NOTES.md` — карта секций, компонентов, ассетов и интеракций.

Перед публикацией подтвердите персональные и профессиональные данные адвоката.
