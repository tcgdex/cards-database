import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Kabutops",
         ja: "カブトップス",
         fr: "Kabutops",
         de: "Kabutops",
         es: "Kabutops",
         it: "Kabutops",
         pt: "Kabutops",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Sharp Sickle",
            ja: "鋭い鎌",
            fr: "Faucille",
            de: "Scharfe Sichel",
            es: "Hoz agudo",
            it: "Falce acuta",
            pt: "Ficha afiada",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
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
            en: "Remove a number of damage counters from Kabutops equal to half the damage done to the Defending Pokemon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Kabutops has fewer damage counters than that, remove all of them.",
            ja: "Kabutopsから多くのダメージカウンターを削除し、防御ポケモンに与えられたダメージの半分に等しい（衰弱と抵抗を適用した後）（最も近い10に丸められた）。 Kabutopsがそれよりも少ないダメージカウンターを持っている場合は、それらすべてを削除します。",
            fr: "Retirez un certain nombre de compteurs de dommages des kabutops égaux à la moitié des dommages causés au Pokémon en défense (après avoir appliqué une faiblesse et une résistance) (arrondi jusqu'au 10 le plus proche). Si Kabutops a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Entfernen Sie eine Reihe von Schadenszähler von Kabutops entspricht der Hälfte der dem verteidigenden Pokémon (nach Auftragen von Schwäche und Widerstand) (abgerundet auf die nächstgelegene 10). Wenn Kabutops weniger Schadenszähler als das haben, entfernen Sie alle.",
            es: "Retire una serie de contadores de daños de Kabutops igual a la mitad del daño causado al Pokémon defensor (después de aplicar debilidad y resistencia) (redondeado a los 10 más cercanos). Si Kabutops tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere una serie di contatori di danno da Kabutops pari alla metà del danno fatto al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza) (arrotondato fino ai 10 più vicini). Se Kabutops ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Remova uma série de contadores de danos dos Kabutops iguais à metade dos danos causados ao Pokémon defensor (após aplicar fraqueza e resistência) (arredondado para os 10 mais próximos). Se Kabutops tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
