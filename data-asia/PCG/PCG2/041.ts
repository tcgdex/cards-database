import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Dusclops",
         ja: "Dusclops",
         fr: "Dusclops",
         de: "Dusclops",
         es: "Dusclops",
         it: "Dusclops",
         pt: "DUSCLOPS",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [356],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psychic Removal",
            ja: "サイキック除去",
            fr: "Retrait psychique",
            de: "Psychische Entfernung",
            es: "Remoción psíquica",
            it: "Rimozione psichica",
            pt: "Remoção psíquica",
          },
          effect: {
            en: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokemon.",
            ja: "2つのコインをフリップします。両方がヘッドである場合、防御ポケモンに取り付けられたすべてのエネルギーを捨ててください。",
            fr: "Flip 2 pièces. Si les deux sont des têtes, jetez toute l'énergie attachée au Pokémon en défense.",
            de: "2 Münzen umdrehen. Wenn beide Köpfe sind, verwerfen Sie die gesamte Energie, die mit dem verteidigenden Pokémon verbunden ist.",
            es: "Flip 2 monedas. Si ambos son cabezas, deseche toda la energía unida al Pokémon defensor.",
            it: "Flip 2 monete. Se entrambi sono teste, scartare tutta l'energia attaccata al Pokemon in difesa.",
            pt: "Flip 2 moedas. Se os dois são cabeças, descarte toda a energia ligada ao pokemon atual.",
          },
          damage: 20,
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Powerful Hand",
            ja: "強力な手",
            fr: "Main puissante",
            de: "Mächtige Hand",
            es: "Mano poderosa",
            it: "Mano potente",
            pt: "Mão poderosa",
          },
          effect: {
            en: "Count the number of cards in your hand. Put that many damage counters on the Defending Pokemon. You can't put more than 7 damage counters in this way.",
            ja: "あなたの手にカードの数を数えます。その多くのダメージカウンターを防御ポケモンに置きます。この方法で7つ以上のダメージカウンターを配置することはできません。",
            fr: "Comptez le nombre de cartes dans votre main. Mettez autant de compteurs de dégâts sur le Pokémon en défense. Vous ne pouvez pas mettre plus de 7 compteurs de dégâts de cette manière.",
            de: "Zählen Sie die Anzahl der Karten in der Hand. Setzen Sie so viele Schadenszähler auf das verteidigende Pokémon. Auf diese Weise können Sie nicht mehr als 7 Schadenszähler setzen.",
            es: "Cuente el número de cartas en su mano. Ponga tantos contadores de daño en el Pokémon defensor. No puedes poner más de 7 contadores de daño de esta manera.",
            it: "Conta il numero di carte in mano. Metti molti contatori di danno sul Pokemon in carica. Non puoi mettere più di 7 contatori di danno in questo modo.",
            pt: "Conte o número de cartas na sua mão. Coloque tantos contadores de danos no Pokémon atual. Você não pode colocar mais de 7 contadores de danos dessa maneira.",
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
