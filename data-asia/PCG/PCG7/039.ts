import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Persian (Delta Species)",
         ja: "ペルシャ（デルタ種）",
         fr: "Persan (espèce delta)",
         de: "Persisch (Delta -Arten)",
         es: "Persa (especie delta)",
         it: "Persian (Delta Species)",
         pt: "Persa (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [53],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Scratch and Draw",
            ja: "スクラッチと描画",
            fr: "Rayer et dessiner",
            de: "Kratzen und zeichnen",
            es: "Rascar y dibujar",
            it: "Graffiare e disegnare",
            pt: "Arranhão e desenhe",
          },
          effect: {
            en: "If any Stadium card with Holon in its name is in play, draw 3 cards.",
            ja: "ホロンがその名前に載っているスタジアムカードが機能している場合は、3枚のカードを描画します。",
            fr: "Si une carte de stade avec Holon en son nom est en jeu, dessinez 3 cartes.",
            de: "Wenn eine Stadionkarte mit Holon in seinem Namen im Spiel ist, zeichnen Sie 3 Karten.",
            es: "Si alguna carta del estadio con Holon en su nombre está en juego, dibuje 3 cartas.",
            it: "Se è in gioco una carta stadio con Holon a suo nome, disegna 3 carte.",
            pt: "Se qualquer carta do estádio com Holon em seu nome estiver em jogo, desenhe 3 cartas.",
          },
          damage: 30,
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Deceive",
            ja: "欺く",
            fr: "Tromper",
            de: "Täuschen",
            es: "Engañar",
            it: "Ingannare",
            pt: "Enganar",
          },
          effect: {
            en: "Your opponent chooses 1 of his or her Pokemon. Put 4 damage counters on that Pokemon.",
            ja: "対戦相手は彼または彼女のポケモンの1つを選択します。そのポケモンに4つのダメージカウンターを置きます。",
            fr: "Votre adversaire choisit l'un de ses Pokémon. Mettez 4 compteurs de dégâts sur ce Pokémon.",
            de: "Dein Gegner wählt 1 seiner Pokémon. Legen Sie dieses Pokémon 4 Schadenszähler.",
            es: "Tu oponente elige 1 de su Pokémon. Pon 4 contadores de daño en ese Pokémon.",
            it: "Il tuo avversario sceglie 1 dei suoi Pokemon. Metti 4 contatori di danno su quel Pokemon.",
            pt: "Seu oponente escolhe 1 de seu Pokémon. Coloque 4 contadores de danos naquele Pokémon.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
