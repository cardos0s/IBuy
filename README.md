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
```bash
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

## 📱 Estrutura de Telas

O aplicativo **IBuy** foi construído de forma modular, utilizando a estrutura de pastas do **Expo Router**,  
onde **cada pasta representa uma rota** (ou tela) do app.  
Abaixo está a organização e a função de cada tela do projeto:

---

### 🏠 1. Tela Inicial (`app/index.tsx`)
> **Função:** É a primeira tela que o usuário vê ao abrir o aplicativo.

- Exibe a **logo do IBuy** e uma mensagem de boas-vindas.  
- Possui um botão para acessar o fluxo principal de navegação (abas).  
- Usa um layout simples e centralizado para facilitar a leitura.  
- Ideal para o primeiro contato do usuário com o app.

**Componentes principais:**
- `<View>` — estrutura base da tela  
- `<Text>` — título e subtítulo  
- `<Image>` — exibição da logo  
- Estilos definidos em `app/_styles.ts`

---

### 🛍️ 2. Tela da Loja (`app/Home/index.tsx`)
> **Função:** Simula a tela de “Loja”, onde ficaria o catálogo de produtos.

- Apresenta a mensagem “Bem-vinda ao IBuy 🛍️”.  
- Serve como exemplo prático de **módulo isolado**, com seus próprios estilos (`Home/_styles.ts`).  
- Demonstra o uso do componente `<Image>` com assets locais (`src/assets/logo.png`).

**Componentes principais:**
- `<View>` — container da tela  
- `<Text>` — títulos e mensagens  
- `<Image>` — logo da aplicação  

---

### 👤 3. Tela de Perfil (`app/tabs/profile.tsx`)
> **Função:** Representa o espaço reservado para o perfil do usuário.

- É uma tela simples que exibe um texto estático: “Perfil do Usuário 👤”.  
- Será futuramente expandida com dados reais do usuário, foto e opções de conta.  
- Mostra o conceito de **componentização e reuso de layout**.

**Componentes principais:**
- `<View>` — container principal  
- `<Text>` — conteúdo da tela  

---

### 🚀 4. Tela de Onboarding (`app/onboarding/index.tsx`)
> **Função:** Tela introdutória que apresenta o aplicativo ao usuário.

- Explica brevemente o propósito do app e convida o usuário a começar.  
- Exibe a logo, título, descrição e um botão “Começar”.  
- Usa o hook `useRouter()` para navegar programaticamente para `/tabs`.  
- Demonstra o uso de **imagens locais**, **botões interativos** e **navegação fora das abas**.

**Componentes principais:**
- `<View>` — estrutura geral da tela  
- `<Text>` — textos de título e descrição  
- `<Image>` — exibição da logo  
- `<TouchableOpacity>` — botão “Começar”  

---

### 🧭 5. Estrutura de Abas (`app/tabs/_layout.tsx`)
> **Função:** Controla a navegação inferior (Bottom Tabs) do app.

- Define as três abas principais:  
  - 🏠 **Início**  
  - 🛍️ **Loja**  
  - 👤 **Perfil**
- Usa o componente `<Tabs>` do **Expo Router**.  
- Inclui ícones do pacote **@expo/vector-icons/Ionicons**.  
- Controla cores, rótulos, ícones e estilo da barra inferior.

**Exemplo:**
```tsx
<Tabs.Screen
  name="home"
  options={{
    title: 'Loja',
    tabBarIcon: ({ color, focused }) => (
      <Ionicons
        name={focused ? 'cart' : 'cart-outline'}
        size={22}
        color={color}
      />
    ),
  }}
/>
