import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Golbat",
         ja: "ゴルバット",
         fr: "Golbat",
         de: "Golbat",
         es: "Golosina",
         it: "Golbat",
         pt: "Golbat",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [42],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 30,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Leech Life",
            ja: "リーチライフ",
            fr: "Vie de sangsue",
            de: "Leech Leben",
            es: "Life de la sanguijuela",
            it: "Vita sanguisuga",
            pt: "Vida sanguessuga",
          },
          effect: {
            en: "Remove a number of damage counters from Golbat equal to the damage done to the Defending Pokemon (after applying Weakness and Resistance). If Golbat has fewer damage counters than that, remove all of them.",
            ja: "防御ポケモンに与えられた損傷に等しいGolbatから多くのダメージカウンターを削除します（脱力感と抵抗を適用した後）。 Golbatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Retirez un certain nombre de compteurs de dommages de Golbat égal aux dommages causés au Pokémon en défense (après application de la faiblesse et de la résistance). Si Golbat a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Entfernen Sie eine Reihe von Schadenszähnen von Golbat entspricht der Schädigung des verteidigenden Pokémon (nach Anwendung von Schwäche und Widerstand). Wenn Golbat weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Elimine una serie de contadores de daño de Golbat igual al daño causado al Pokémon defensor (después de aplicar debilidad y resistencia). Si Golbat tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere una serie di contatori di danno da Golbat pari al danno fatto al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza). Se Golbat ha meno contatori di danno di così, rimuovi tutti.",
            pt: "Remova uma série de contadores de danos do Golbat igual aos danos causados ao Pokémon defensivo (após aplicar fraqueza e resistência). Se Golbat tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 20,
        },
      ],


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
