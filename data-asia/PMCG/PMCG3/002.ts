import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Zubat",
         ja: "Zubat",
         fr: "Zubat",
         de: "Zubat",
         es: "Zubat",
         it: "Zubat",
         pt: "Zubat",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [41],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Supersonic",
            ja: "超音速",
            fr: "Supersonique",
            de: "Überschall",
            es: "Supersónico",
            it: "Supersonico",
            pt: "Supersônico",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },

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
            en: "Remove a number of damage counters from Zubat equal to the damage done to the Defending Pokemon (after applying Weakness and Resistance). If Zubat has fewer damage counters than that, remove all of them.",
            ja: "防御ポケモンに与えられた損傷に等しいZubatから多くのダメージカウンターを削除します（脱力と抵抗を適用した後）。 Zubatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Retirez un certain nombre de compteurs de dégâts de Zubat égal aux dommages causés au Pokémon en défense (après application de la faiblesse et de la résistance). Si Zubat a moins de compteurs de dégâts que cela, retirez tous.",
            de: "Entfernen Sie eine Reihe von Schadenszähnen von Zubat, die der Schädigung des verteidigenden Pokémons entspricht (nachdem Sie Schwäche und Widerstand aufgetragen haben). Wenn Zubat weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Elimine una serie de contadores de daño de Zubat igual al daño causado al Pokémon defensor (después de aplicar debilidad y resistencia). Si Zubat tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere una serie di contatori di danno da Zubat pari al danno fatto al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza). Se Zubat ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Remova uma série de contadores de danos do Zubat igual aos danos causados ao Pokémon defensivo (após aplicar fraqueza e resistência). Se o Zubat tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 10,
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
