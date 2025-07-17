import {Card} from "../../../interfaces"
import Set from "../ADV2"

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
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Judgement",
            ja: "判定",
            fr: "Jugement",
            de: "Urteil",
            es: "Juicio",
            it: "Sentenza",
            pt: "Julgamento",
          },
          effect: {
            en: "Flip 2 coins. If both of them are heads, the Defending Pokemon is Knocked Out.",
            ja: "2つのコインをフリップします。両方がヘッドである場合、防御ポケモンはノックアウトされます。",
            fr: "Flip 2 pièces. Si les deux sont des têtes, le Pokémon défendant est éliminé.",
            de: "2 Münzen umdrehen. Wenn beide Köpfe sind, wird das verteidigende Pokémon ausgeschaltet.",
            es: "Flip 2 monedas. Si ambos son cabezas, el Pokémon defensor es noqueado.",
            it: "Flip 2 monete. Se entrambi sono teste, il Pokemon in carica viene eliminato.",
            pt: "Flip 2 moedas. Se os dois são cabeças, o Pokémon atual será nocauteado.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Random Curse",
            ja: "ランダムな呪い",
            fr: "Malédiction aléatoire",
            de: "Zufälliger Fluch",
            es: "Maldición aleatoria",
            it: "Maledizione casuale",
            pt: "Maldição aleatória",
          },
          effect: {
            en: "Put a total of 5 damage counters on all Defending Pokemon in any way you like.",
            ja: "あなたが好きな方法で、すべての防御ポケモンに合計5つのダメージカウンターを入れてください。",
            fr: "Mettez un total de 5 compteurs de dégâts sur tous les Pokémon en défense de quelque manière que ce soit.",
            de: "Setzen Sie insgesamt 5 Schadenszähler auf alle verteidigenden Pokemon auf eine Weise auf, die Sie möchten.",
            es: "Ponga un total de 5 contadores de daño en todos los Pokémon defensores de la manera que desee.",
            it: "Metti un totale di 5 contatori di danno su tutti i Pokemon in difesa in ogni modo che desideri.",
            pt: "Coloque um total de 5 contadores de danos em todos os Pokémon defensores da maneira que desejar.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
