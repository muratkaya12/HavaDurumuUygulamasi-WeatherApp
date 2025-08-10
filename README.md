# WeatherApp

React + Vite kullanılarak geliştirilmiş, hava durumu ve 5 günlük tahmin uygulaması.

## 🚀 Özellikler

- Güncel hava durumu gösterimi
- 5 günlük / 3 saatlik tahmin özeti
- Redux Toolkit ile state yönetimi
- OpenWeatherMap API entegrasyonu

## 🛠 Kullanılan Teknolojiler

- React
- Vite
- Redux Toolkit
- Axios
- CSS

## 📦 Kurulum ve Çalıştırma

### 1. Repoyu klonlayın

```bash
git clone <REPO_URL>
cd WeatherApp
```

### 2. Ortam değişkenini ayarlayın

Proje kök dizinine `.env` dosyası ekleyin:

```env
VITE_OPENWEATHER_API_KEY=senin_api_keyin
```

> **Not:** `.env` dosyası `.gitignore` içinde yer aldığından GitHub’a yüklenmez.

### 3. Bağımlılıkları yükleyin

```bash
npm install
```

### 4. Geliştirme sunucusunu başlatın

```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresine gidin.

### 5. Üretim için derleme

```bash
npm run build
```

---

## 📂 Proje Yapısı (Örnek)

```
WeatherApp/
├─ src/
│  ├─ components/
│  ├─ redux/
│  │  └─ weatherSlice.jsx
│  └─ main.jsx
├─ public/
├─ assets/screenshots/      # Uygulama görselleri
├─ .env                     # API key burada
├─ .gitignore
├─ package.json
└─ README.md
```

---

## 🖼 Ekran Görüntüleri

<p align="center">
  <img src="assets/screenshots/weather_app_ss-1.png" width="400">
  <img src="assets/screenshots/weather_app_ss-2.png" width="400">
  <img src="assets/screenshots/weather_app_ss-3.png" width="400">
  <img src="assets/screenshots/weather_app_ss-4.png" width="400">
</p>
