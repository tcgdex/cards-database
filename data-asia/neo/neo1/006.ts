import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Sunkern",
         ja: "サンカーン",
         fr: "Enfermer",
         de: "Gesunken",
         es: "Hundido",
         it: "Sunker",
         pt: "SUNHERN",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [191],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Growth",
            ja: "成長",
            fr: "Croissance",
            de: "Wachstum",
            es: "Crecimiento",
            it: "Crescita",
            pt: "Crescimento",
          },
          effect: {
            en: "Flip a coin. If heads, you may attach up to 2 Grass Energy cards from your hand to Sunkern.",
            ja: "コインをひっくり返します。頭の場合は、手からサンカーンに2匹の草エネルギーカードを2枚取り付けることができます。",
            fr: "Retourner une pièce. Si les têtes, vous pouvez attacher jusqu'à 2 cartes d'énergie de l'herbe de votre main à Sunkern.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, können Sie bis zu 2 Grasergiekarten von Ihrer Hand bis Sunkern anbringen.",
            es: "Voltea una moneda. Si se dirige, puede unir a 2 tarjetas de energía de hierba desde su mano a Sunkern.",
            it: "Capovolgi una moneta. Se la testa, puoi attaccare fino a 2 carte di energia in erba dalla mano a Sunker.",
            pt: "Vire uma moeda. Se as cabeças, você poderá anexar até 2 cartões de energia da sua mão a Sunwern.",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Mega Drain",
            ja: "メガドレイン",
            fr: "Méga drainage",
            de: "Mega Drain",
            es: "Mega drenaje",
            it: "Mega drenaggio",
            pt: "Mega dreno",
          },
          effect: {
            en: "Remove a number of damage counters from Sunkern equal to half the damage done to the Defending Pokemon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Sunkern has fewer damage counters than that, remove all of them.",
            ja: "防御ポケモンに与えられたダメージの半分に等しいサンカーンから多数のダメージカウンターを削除します（脱力感と抵抗を適用した後）（最も近い10に丸められた）。 Sunkernのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Retirez un certain nombre de compteurs de dégâts de Sunkern égal à la moitié des dommages causés au Pokémon en défense (après avoir appliqué une faiblesse et une résistance) (arrondi jusqu'au 10 le plus proche). Si Sunkern a moins de compteurs de dégâts que cela, retirez tous.",
            de: "Entfernen Sie eine Reihe von Schadenszähnen von Sunkern, die der Hälfte der dem verteidigenden Pokémon (nach Auftragen von Schwäche und Widerstand) (bis zum nächsten 10) entspricht. Wenn Sunkern weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Retire una serie de contadores de daño del hunkern igual a la mitad del daño causado al Pokémon defensor (después de aplicar debilidad y resistencia) (redondeado a los 10 más cercanos). Si Sunkern tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere una serie di contatori di danno da Sunker pari a metà del danno fatto al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza) (arrotondato fino ai 10 più vicini). Se Sunkern ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Remova uma série de contadores de dano da SunKern igual a metade dos danos causados ao Pokémon defensivo (após aplicar fraqueza e resistência) (arredondado para os 10 mais próximos). Se a Sunkern tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
