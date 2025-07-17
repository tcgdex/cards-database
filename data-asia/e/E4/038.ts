import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Raikou - 038/088",
         ja: "ライコウ-038/088",
         fr: "Raikou - 038/088",
         de: "Raikou - 038/088",
         es: "Raikou - 038/088",
         it: "Raikou - 038/088",
         pt: "Raikou - 038/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [243],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Pure Body",
            ja: "純粋な体",
            fr: "Corps pur",
            de: "Reiner Körper",
            es: "Cuerpo puro",
            it: "Corpo puro",
            pt: "Corpo puro",
          },
          effect: {
            en: "To attach a Lightning Energy card from your hand to Raikou, you must discard an Energy card attached to Raikou. (Attach the Lightning Energy, and then discard an Energy card from Raikou.)",
            ja: "手からライコウに稲妻エネルギーカードを取り付けるには、ライコウに取り付けられたエネルギーカードを捨てる必要があります。 （稲妻エネルギーを取り付けてから、ライコウからエネルギーカードを捨てます。）",
            fr: "Pour fixer une carte d'énergie Lightning de votre main à Raikou, vous devez jeter une carte d'énergie attachée à Raikou. (Fixez l'énergie Lightning, puis jetez une carte d'énergie de Raikou.)",
            de: "Um eine Lightning Energy -Karte von Ihrer Hand an Raikou anzubringen, müssen Sie eine an Raikou befestigte Energiekarte verwerfen. (Befestigen Sie die Blitzergie und verwerfen Sie dann eine Energiekarte von Raikou.)",
            es: "Para unir una tarjeta de energía del rayo de su mano a Raikou, debe descartar una tarjeta de energía unida a Raikou. (Adjunte la energía del rayo y luego deseche una tarjeta de energía de Raikou).",
            it: "Per collegare una scheda energetica Lightning dalla tua mano a Raikou, è necessario scartare una carta di energia collegata a Raikou. (Collegare l'energia dei fulmini e quindi scartare una carta energetica da Raikou.)",
            pt: "Para anexar um cartão de energia de raios da sua mão a Raikou, você deve descartar um cartão de energia conectado a Raikou. (Anexe a energia do raio e, em seguida, descarte um cartão de energia de Raikou.)",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Lightning Sphere",
            ja: "稲妻球",
            fr: "Sphère de foudre",
            de: "Blitzkugel",
            es: "Esfera de rayos",
            it: "Sfera di fulmini",
            pt: "Esfera de raios",
          },
          effect: {
            en: "You may flip a coin. If heads, discard all Lightning Energy cards attached to Raikou. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way.",
            ja: "コインをひっくり返すことができます。頭の場合は、ライコウに取り付けられたすべての稲妻エネルギーカードを捨ててください。この攻撃は、この方法で破棄されたエネルギーカードごとに40のダメージと20のダメージを与えます。",
            fr: "Vous pouvez retourner une pièce. Si les têtes, jetez toutes les cartes d'énergie de foudre attachées à Raikou. Cette attaque fait 40 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie jetée de cette manière.",
            de: "Sie können eine Münze umdrehen. Wenn Sie Köpfe haben, entsorgen Sie alle Blitzenergiekarten, die an Raikou angebracht sind. Dieser Angriff verursacht 40 Schäden plus 20 weitere Schäden für jede auf diese Weise verworfene Energiekarte.",
            es: "Puedes voltear una moneda. Si se dirige, deseche todas las tarjetas de energía de Lightning unidas a Raikou. Este ataque hace 40 daños más 20 más de daño por cada carta de energía descartada de esta manera.",
            it: "Puoi capovolgere una moneta. Se la testa, scartare tutte le carte di energia Lightning attaccate a Raikou. Questo attacco infligge 40 danni più 20 danni in più per ciascuna carta di energia scartata in questo modo.",
            pt: "Você pode virar uma moeda. Se as cabeças, descarte todos os cartões de energia de raios anexados a Raikou. Este ataque causa 40 danos mais 20 mais danos para cada cartão de energia descartado dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
