import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Seadra",
         ja: "ミスティのシードラ",
         fr: "Seadra de Misty",
         de: "Mistys Seadra",
         es: "Seadra de Misty",
         it: "Misty's Seadra",
         pt: "Misty's Seadra",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [117],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Tail Snap",
            ja: "テールスナップ",
            fr: "Snap de la queue",
            de: "Schwanzschnapp",
            es: "Chasquido",
            it: "Scatto di coda",
            pt: "Tail Snap",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Knockout Needle",
            ja: "ノックアウト針",
            fr: "Aiguille à élimination directe",
            de: "Knockout -Nadel",
            es: "Aguja de nocaut",
            it: "Ago knockout",
            pt: "Agulha nocaute",
          },
          effect: {
            en: "Flip 2 coins. If both of them are heads, this attack does 30 damage plus 60 more damage. If 1 or both of them are tails, this attack does 30 damage.",
            ja: "2つのコインをフリップします。両方がヘッドである場合、この攻撃は30ダメージに加えて60ダメージを与えます。それらの1または両方が尾の場合、この攻撃は30のダメージを与えます。",
            fr: "Flip 2 pièces. Si les deux sont des têtes, cette attaque fait 30 dégâts plus 60 dégâts supplémentaires. Si 1 ou les deux sont des queues, cette attaque fait 30 dégâts.",
            de: "2 Münzen umdrehen. Wenn beide Köpfe sind, verursacht dieser Angriff 30 Schäden plus 60 weitere Schäden. Wenn 1 oder beide Schwänze sind, verursacht dieser Angriff 30 Schaden.",
            es: "Flip 2 monedas. Si ambos son cabezas, este ataque hace 30 daños más 60 más de daño. Si 1 o ambas son colas, este ataque hace 30 daños.",
            it: "Flip 2 monete. Se entrambi sono teste, questo attacco infligge 30 danni più 60 danni. Se 1 o entrambi sono code, questo attacco infligge 30 danni.",
            pt: "Flip 2 moedas. Se ambos são cabeças, esse ataque causará 30 danos mais 60 mais danos. Se 1 ou ambos são caudas, esse ataque causará 30 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
