import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Donphan",
         ja: "ダークドンファン",
         fr: "Donphan noir",
         de: "Dunkler Donphan",
         es: "Donphan oscuro",
         it: "Dark Donphan",
         pt: "Donphan escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [232],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Tusk Toss",
            ja: "Tusk Toss",
            fr: "Tissu de la défense",
            de: "Stoßfänger",
            es: "Tumba",
            it: "Tusk Toss",
            pt: "Tusk Toss",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, flip a coin. If heads, return the Defending Pokemon and all cards attached to it to your opponent's hand. If tails, your opponent chooses 1 of his or her Benched Pokemon and switches it with the Defending Pokemon.",
            ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。頭の場合は、防御するポケモンとそれに取り付けられたすべてのカードを相手の手に返します。尾の場合、対戦相手はベンチ付きポケモンの1つを選択し、防御ポケモンで切り替えます。",
            fr: "Si votre adversaire a des pokemon bancés, retournez une pièce. Si les têtes, retournez le Pokémon en défense et toutes les cartes qui y sont attachées à la main de votre adversaire. Si Tails, votre adversaire choisit l'un de ses pokémon bancés et le change avec le Pokémon en défense.",
            de: "Wenn Ihr Gegner Pokémon mit Bank hat, drehen Sie eine Münze. Wenn Sie Köpfe sind, geben Sie das verteidigende Pokemon und alle daran an die Hand Ihres Gegners angeschlossenen Karten zurück. Wenn Schwänze, wählt Ihr Gegner 1 seiner oder ihr Bankpokémon aus und wechselt es mit dem verteidigenden Pokémon.",
            es: "Si tu oponente tiene algún Pokémon de banca, voltea una moneda. Si se dirige, devuelva el Pokémon defensor y todas las cartas adjuntas a la mano de tu oponente. Si Tails, tu oponente elige 1 de su pokemon de banca y lo cambia con el Pokémon defensor.",
            it: "Se il tuo avversario ha un Pokemon in panchina, capovolgi una moneta. Se la testa, restituisce il Pokemon in carica e tutte le carte attaccate alla mano del tuo avversario. Se le code, il tuo avversario sceglie 1 dei suoi Pokemon in panchina e lo cambia con il Pokemon in difesa.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, retorne o Pokémon atual e todos os cartões anexados à mão do seu oponente. Se as caudas, seu oponente escolhe 1 de seu Pokémon em banco e o troca com o Pokémon atual.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Giant Tusk",
            ja: "巨大な牙",
            fr: "Défense de géant",
            de: "Riesiger Stoßzahn",
            es: "Colmillo gigante",
            it: "Tusk gigante",
            pt: "Presa gigante",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
