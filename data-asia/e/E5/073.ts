import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Steelix - 073/088",
         ja: "Steelix -073/088",
         fr: "Steelix - 073/088",
         de: "Steelix - 073/088",
         es: "Steelix - 073/088",
         it: "STEASCEX - 073/088",
         pt: "Steelix - 073/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [208],
      hp: 100,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Rare Metal",
            ja: "レアメタル",
            fr: "Métal rare",
            de: "Seltenes Metall",
            es: "Metal raro",
            it: "Metallo raro",
            pt: "Metal raro",
          },
          effect: {
            en: "All basic Energy cards attached to Steelix provide Metal Energy instead of their usual types.",
            ja: "Steelixに取り付けられたすべての基本エネルギーカードは、通常のタイプではなく金属エネルギーを提供します。",
            fr: "Toutes les cartes d'énergie de base attachées à Steelix fournissent de l'énergie métallique au lieu de leurs types habituels.",
            de: "Alle an Steelix befestigten grundlegenden Energiekarten liefern Metallenergie anstelle ihrer üblichen Typen.",
            es: "Todas las tarjetas de energía básicas unidas a Steelix proporcionan energía metálica en lugar de sus tipos habituales.",
            it: "Tutte le carte energetiche di base collegate ad Steilix forniscono energia metallica anziché i loro soliti tipi.",
            pt: "Todos os cartões de energia básicos anexados ao Steelix fornecem energia metálica em vez de seus tipos habituais.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Metal", "Colorless"],
          name: {
            en: "Squeeze",
            ja: "絞る",
            fr: "Presser",
            de: "Quetschen",
            es: "Estrujar",
            it: "Stretta",
            pt: "Espremer",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与え、防御ポケモンが麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires et le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden und das verteidigende Pokémon ist jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño y el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 20 danni più 10 danni in più e il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos e o pokemon atual está agora paralisado.",
          },
        },
        {
          cost: ["Metal", "Metal", "Metal", "Colorless"],
          name: {
            en: "Metal Tail",
            ja: "メタルテール",
            fr: "Queue métallique",
            de: "Metallschwanz",
            es: "Cola de metal",
            it: "Coda di metallo",
            pt: "Cauda de metal",
          },
          effect: {
            en: "Before doing damage, you may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.",
            ja: "ダメージを与える前に、コインをひっくり返すことができます。頭の場合、この攻撃は80のダメージを与えます。尾の場合、この攻撃は何もしません。",
            fr: "Avant de faire des dégâts, vous pouvez retourner une pièce. Si les têtes, cette attaque fait 80 dégâts. Si Tails, cette attaque ne fait rien.",
            de: "Bevor Sie Schaden anrichten, können Sie eine Münze umdrehen. Wenn Köpfe, verursacht dieser Angriff 80 Schaden. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Antes de hacer daño, puede voltear una moneda. Si se dirige, este ataque hace 80 daños. Si Tails, este ataque no hace nada.",
            it: "Prima di fare danni, puoi capovolgere una moneta. Se la testa, questo attacco infligge 80 danni. Se le code, questo attacco non fa nulla.",
            pt: "Antes de causar danos, você pode virar uma moeda. Se as cabeças, esse ataque causará 80 danos. Se caudas, esse ataque não faz nada.",
          },
          damage: 40,
        },
      ],

      retreat: 4,

};
