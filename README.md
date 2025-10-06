# 🛍️ IBuy — Aplicativo de Compras para Iniciantes  

> 📱 Repositório de **estudos de React Native e Expo**, criado com foco em aprender os fundamentos do desenvolvimento mobile moderno.  
> O projeto simula um **aplicativo de compras simples**, com telas básicas, navegação por abas e um fluxo inicial de onboarding.

---

## 📚 Sobre o Projeto

O **IBuy** é um aplicativo desenvolvido como parte dos meus estudos em **React Native com Expo**, voltado para **quem está iniciando no desenvolvimento mobile**.

A proposta é explorar:

- Estruturação de pastas com Expo Router  
- Navegação entre telas usando **Tabs**  
- Uso de **componentes básicos do React Native** (View, Text, Image, TouchableOpacity)  
- Organização de estilos com **StyleSheet e arquivos separados (`_styles.ts`)**  
- Conceito de **onboarding** (tela de introdução)  
- Boas práticas de projeto e versionamento com Git  

---

## 🧠 Objetivos de Aprendizado

- Entender a **arquitetura de um projeto Expo**
- Criar **interfaces simples e responsivas**
- Aplicar **boas práticas de organização de código**
- Aprender a usar **imagens locais (assets)** corretamente
- Compreender o fluxo básico de **navegação e estado**

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **React Native** | Framework para criação de apps nativos com JavaScript |
| **Expo** | Ferramenta para desenvolvimento e build simplificado |
| **TypeScript** | Superset de JavaScript com tipagem estática |
| **Expo Router** | Sistema de rotas baseado em pastas |
| **@expo/vector-icons** | Ícones nativos para o app |
| **Git + GitHub** | Controle de versão e armazenamento do código |

---

## 🧩 Estrutura de Pastas
IBuy/
├── app/
│   ├── _layout.tsx        → Layout principal com Tabs
│   ├── index.tsx          → Página inicial
│   ├── _styles.ts         → Estilos da tela inicial
│   ├── Home/
│   │   ├── index.tsx      → Tela “Loja”
│   │   └── _styles.ts     → Estilos da tela Home
│   └── tabs/
│       └── _layout.tsx    → Estrutura das abas
│
├── src/
│   └── assets/            → Imagens e ícones (logo, etc.)
│
├── app.json               → Configurações do Expo
├── package.json           → Dependências do projeto
├── tsconfig.json          → Configuração do TypeScript
└── README.md              → Documentação do projeto

