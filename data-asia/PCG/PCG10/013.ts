import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Combusken",
         ja: "Combusken",
         fr: "Combattant",
         de: "Kombusken",
         es: "Combusken",
         it: "Combusken",
         pt: "Combusken",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [256],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Natural Cure",
            ja: "自然な治療",
            fr: "Remède naturel",
            de: "Natürliche Heilung",
            es: "Cura natural",
            it: "Cura naturale",
            pt: "Cura natural",
          },
          effect: {
            en: "When you attach a Fire Energy card from your hand to Combusken, remove all Special Conditions from Combusken.",
            ja: "ファイアエネルギーカードを手からコンバスケンに取り付けるときは、Combuskenからすべての特別な条件を削除します。",
            fr: "Lorsque vous attachez une carte d'énergie de feu de votre main à Combusken, retirez toutes les conditions spéciales de Combusken.",
            de: "Wenn Sie eine Feuerergiekarte von Ihrer Hand an den Combusken anbringen, entfernen Sie alle besonderen Bedingungen vom Combusken.",
            es: "Cuando adjunte una tarjeta de energía de fuego de su mano a Combusken, elimine todas las condiciones especiales de Combusken.",
            it: "Quando si collega una scheda di energia antincendio dalla mano a Combusken, rimuovere tutte le condizioni speciali da Combusken.",
            pt: "Quando você anexar um cartão de energia de incêndio da sua mão a combusken, remova todas as condições especiais da Combusken.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Lunge",
            ja: "突進",
            fr: "Se précipiter",
            de: "Longe",
            es: "Estocada",
            it: "Affondo",
            pt: "Estocada",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
