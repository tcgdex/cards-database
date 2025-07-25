import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Bellossom - 019/087",
         ja: "Bellossom -019/087",
         fr: "Bellossom - 019/087",
         de: "Bellossom - 019/087",
         es: "Billassom - 019/087",
         it: "Bellossom - 019/087",
         pt: "Bellossom - 019/087",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [182],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Flower Supplement",
            ja: "フラワーサプリメント",
            fr: "Complément de fleurs",
            de: "Blumenergänzung",
            es: "Suplemento de flores",
            it: "Supplemento di fiori",
            pt: "Suplemento de flores",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, attach 1 basic Energy card from your hand to 1 of your Benched Pokmon. This power can't be used if Bellossom is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、手から1つのベンチポクモンに1つの基本エネルギーカードを取り付けます。 Bellossomが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, attachez 1 carte d'énergie de base de votre main à 1 de votre pokmon banc. Cette puissance ne peut pas être utilisée si Bellossom est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, fügen Sie 1 Basic Energy Card von Ihrer Hand an 1 Ihres Bank -Pokmons an. Diese Kraft kann nicht verwendet werden, wenn Bellossom von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, adjunte 1 tarjeta de energía básica de su mano a 1 de su banca Pokmon. Este poder no se puede usar si Billassom se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se le teste, collega 1 scheda energetica di base dalla mano a 1 dei Pokmon in panchina. Questo potere non può essere usato se il bellossom è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, conecte 1 cartão de energia básica da sua mão a 1 do seu Pokmon em bancada. Esse poder não pode ser usado se Bellossom for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Knife Leaf",
            ja: "ナイフの葉",
            fr: "Feuille de couteau",
            de: "Messerblatt",
            es: "Hoja de cuchillo",
            it: "Foglia di coltello",
            pt: "Folha de faca",
          },
          effect: {
            en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 3 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

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
