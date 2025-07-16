import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Venonat",
         ja: "ヴェノナト",
         fr: "Venonat",
         de: "Venonat",
         es: "Venonat",
         it: "Venonat",
         pt: "Venonat",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [48],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Stun Spore",
            ja: "スタン胞子",
            fr: "Spored",
            de: "Stun Spore",
            es: "Espora",
            it: "Spora stordente",
            pt: "Esporo de atordoamento",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
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
            en: "Remove a number of damage counters from Venonat equal to the damage done to the Defending Pokemon (after applying Weakness and Resistance). If Venonat has fewer damage counters than that, remove all of them.",
            ja: "Venonatから多くのダメージカウンターを除去し、防御ポケモンに与えられた損傷に等しい（脱力感と抵抗を適用した後）。 Venonatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Retirez un certain nombre de compteurs de dégâts de Venonat égal aux dommages causés au Pokémon en défense (après avoir appliqué une faiblesse et une résistance). Si Venonat a moins de compteurs de dégâts que cela, retirez tous.",
            de: "Entfernen Sie eine Reihe von Schadenszähnen von Venonat entspricht der Schädigung, die dem verteidigenden Pokémon angerichtet wurde (nachdem Sie Schwäche und Widerstand aufgetragen haben). Wenn Venonat weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Elimine una serie de contadores de daño de Venonat igual al daño causado al Pokémon defensor (después de aplicar debilidad y resistencia). Si Venonat tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere una serie di contatori di danno da Venonat pari al danno fatto al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza). Se Venonat ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Remova uma série de contadores de danos do Venonat igual aos danos causados ao Pokémon defensivo (após aplicar fraqueza e resistência). Se Venonat tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
