import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Oddish",
         ja: "奇妙な",
         fr: "Bizarre",
         de: "Seltsam",
         es: "Extraño",
         it: "Strano",
         pt: "Ímpar",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [43],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hide",
            ja: "隠れる",
            fr: "Cacher",
            de: "Verstecken",
            es: "Esconder",
            it: "Nascondere",
            pt: "Esconder",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Oddish.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ダメージを含む攻撃のすべての影響がオッディッシュに行われます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Oddish.",
            de: "Eine Münze drehen. Wenn Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, an Oddish verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los efectos de los ataques, incluido el daño, se hagan a Oddish.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, a Oddish.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados a estranhos.",
          },
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Absorb",
            ja: "吸収する",
            fr: "Absorber",
            de: "Absorbieren",
            es: "Absorber",
            it: "Assorbire",
            pt: "Absorver",
          },
          effect: {
            en: "Remove a number of damage counters from Oddish equal to half the damage done to the Defending Pokemon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Oddish has fewer damage counters than that, remove all of them.",
            ja: "防御ポケモンに行われたダメージの半分に等しいOddishから多数のダメージカウンターを削除します（衰弱と抵抗を適用した後）（最も近い10に丸められます）。 Oddishのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Retirez un certain nombre de compteurs de dégâts de Odishish égal à la moitié des dommages causés au Pokémon en défense (après avoir appliqué une faiblesse et une résistance) (arrondi jusqu'au 10 le plus proche). Si Oddish a moins de compteurs de dégâts que cela, retirez tous.",
            de: "Entfernen Sie eine Reihe von Schadenszähler von Oddish gleich der Hälfte der dem verteidigenden Pokémon (nach Auftragen von Schwäche und Widerstand) (abgerundet auf die nächstgelegene 10). Wenn Oddish weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Retire una serie de contadores de daño de Oddish igual a la mitad del daño causado al Pokémon defensor (después de aplicar debilidad y resistencia) (redondeado hasta los 10 más cercanos). Si Oddish tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere una serie di contatori di danno da Oddish pari alla metà del danno fatto al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza) (arrotondato fino ai 10 più vicini). Se Oddish ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Remova uma série de contadores de danos de ímpares iguais à metade dos danos causados ao Pokémon defensivo (após aplicar fraqueza e resistência) (arredondado para o 10 mais próximo). Se Oddish tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
