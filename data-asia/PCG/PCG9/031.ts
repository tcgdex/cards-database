import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Lickitung (Delta Species)",
         ja: "Lickitung（デルタ種）",
         fr: "Lickitung (espèces delta)",
         de: "Lickitung (Delta -Arten)",
         es: "Lickitung (especie delta)",
         it: "Lickitung (Delta Species)",
         pt: "Lickitung (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [108],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Lap Up",
            ja: "ラップアップ",
            fr: "Laper",
            de: "Lap Up",
            es: "Absorber",
            it: "Girare su",
            pt: "Volta",
          },
          effect: {
            en: "Draw 2 cards.",
            ja: "2枚のカードを描きます。",
            fr: "Dessinez 2 cartes.",
            de: "Zeichnen Sie 2 Karten.",
            es: "Dibuja 2 cartas.",
            it: "Disegna 2 carte.",
            pt: "Desenhe 2 cartas.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Delta Mind",
            ja: "デルタマインド",
            fr: "Mind delta",
            de: "Delta Geist",
            es: "Mente delta",
            it: "Delta Mind",
            pt: "Delta Mind",
          },
          effect: {
            en: "Put 1 damage counter on 1 of your opponent's Pokemon. If that Pokemon has d on its card, put 3 damage counters instead.",
            ja: "相手のポケモンの1つに1つのダメージカウンターを置きます。そのポケモンがカードにDがある場合は、代わりに3つのダメージカウンターを入れます。",
            fr: "Mettez 1 compteur de dégâts sur le pokemon de votre adversaire. Si ce Pokémon a D sur sa carte, mettez à la place 3 compteurs de dégâts.",
            de: "Legen Sie 1 Schadenschalter auf 1 des Pokémon Ihres Gegners. Wenn dieses Pokemon D auf seiner Karte hat, setzen Sie stattdessen 3 Schadenszähler.",
            es: "Pon 1 mostrador de daño en 1 de los Pokémon de tu oponente. Si ese Pokémon tiene D en su tarjeta, coloque 3 contadores de daño.",
            it: "Metti 1 contatore di danni su 1 del Pokemon del tuo avversario. Se quel Pokemon ha D sulla sua carta, metti invece 3 contatori di danno.",
            pt: "Coloque 1 contador de danos em 1 do Pokémon do seu oponente. Se esse Pokemon tiver D em seu cartão, coloque 3 contadores de danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
