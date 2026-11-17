# Zikang Li · 李子康

Personal academic portfolio, hosted at https://galahad1123.github.io/.

## 内容 / Content

中英文个人简介、研究与项目展示、教育经历、联系方式。项目顺序：

1. Open-VLA-TTT
2. TD-VLA
3. RoboNexus
4. EvoWorld
5. Duco-Teleop

The site is plain HTML, CSS, and JavaScript, with no build dependencies. It includes a language switch, full-resolution diagram viewers, and two video demos. The default language is Chinese; `?lang=en` opens English. A visitor's language choice is stored only in their browser.

## 发布 / Publishing

In GitHub **Settings → Pages**, select **Deploy from a branch**, then **main / (root)** and save. The `.nojekyll` file allows these static files to be served directly.

## 更新 / Editing

- `index.html`: profile, bilingual content, project ordering, and links. Update both `data-zh` and `data-en` when changing translated text, as well as the default visible text.
- `style.css`: responsive layout and visual styles.
- `main.js`: language selection and media dialogs.
- `assets/`: portrait, project diagrams, and demonstration videos.

TD-VLA links to `feature/td-vla-v1`, the branch containing its current project documentation. Update this link if that branch is merged or renamed.

## 素材与来源 / Sources

Project diagrams and demos are copied from the corresponding Galahad1123 repositories. The portrait was supplied by the site owner. Project descriptions follow the source repositories; ongoing research is labeled accordingly. Upstream acknowledgements and licensing remain in each project's repository, including Unitree xr_teleoperate for Duco-Teleop, TurboVLA/RoboTwin for TD-VLA, and SAGE/RLinf for EvoWorld.

The academic profile/sidebar and project-list presentation was inspired by https://zhenyangliu.github.io/. This implementation is independently written and uses the owner's content and assets.
