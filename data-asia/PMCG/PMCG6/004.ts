import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Nidoran M",
         ja: "ジョバンニのニドランm",
         fr: "Nidoran M de Giovanni",
         de: "Giovannis Nidoran m",
         es: "Nidoran M de Giovanni",
         it: "Giovanni's Nidoran m",
         pt: "Nidoran de Giovanni m",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [32],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Double Kick",
            ja: "ダブルキック",
            fr: "Coup de pied",
            de: "Double Kick",
            es: "Doble patada",
            it: "Doppio calcio",
            pt: "Chute duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Retaliation",
            ja: "報復",
            fr: "Représailles",
            de: "Vergeltung",
            es: "Represalias",
            it: "Ritorsione",
            pt: "Retaliação",
          },
          effect: {
            en: "You can't use this attack unless Giovanni's Nidoran M has 2 or more damage counters on it.",
            ja: "GiovanniのNidoran Mに2つ以上のダメージカウンターがある場合を除き、この攻撃を使用することはできません。",
            fr: "Vous ne pouvez pas utiliser cette attaque à moins que Nidoran M de Giovanni ait 2 compteurs de dégâts ou plus dessus.",
            de: "Sie können diesen Angriff nicht verwenden, es sei denn, Giovannis Nidoran M hat 2 oder mehr Schadenszähler.",
            es: "No puedes usar este ataque a menos que el Nidoran M de Giovanni tenga 2 o más contadores de daño.",
            it: "Non puoi usare questo attacco a meno che Nidoran M di Giovanni non abbia 2 o più contatori di danno su di esso.",
            pt: "Você não pode usar esse ataque, a menos que o Nidoran M de Giovanni tenha 2 ou mais contadores de danos.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
