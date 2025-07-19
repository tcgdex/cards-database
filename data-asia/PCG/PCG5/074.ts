import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lairon",
         ja: "レイロン",
         fr: "Lairon",
         de: "Lairon",
         es: "Guarida",
         it: "Lairon",
         pt: "Lairon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [305],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rest",
            ja: "休む",
            fr: "Repos",
            de: "Ausruhen",
            es: "Descansar",
            it: "Riposo",
            pt: "Descansar",
          },
          effect: {
            en: "Remove all Special Conditions and 5 damage counters (all if there are less than 5) from Lairon. Lairon is now Asleep.",
            ja: "Laironからすべての特別な条件と5つのダメージカウンター（5つ未満の場合はすべて）を削除します。ライロンは今眠っています。",
            fr: "Retirez toutes les conditions spéciales et 5 compteurs de dégâts (tous s'il y en a moins de 5) de Lairon. Lairon est maintenant endormi.",
            de: "Entfernen Sie alle speziellen Bedingungen und 5 Schadenszähler (alle, wenn es weniger als 5) von Lairon aus der Lairon. Lairon schläft jetzt.",
            es: "Elimine todas las condiciones especiales y 5 contadores de daño (todos si hay menos de 5) de Lairon. Lairon ahora está dormido.",
            it: "Rimuovere tutte le condizioni speciali e 5 contatori di danno (tutti se ci sono meno di 5) da Lairon. Lairon ora dorme.",
            pt: "Remova todas as condições especiais e 5 contadores de danos (todos se houver menos de 5) de Lairon. Lairon está agora dormindo.",
          },
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
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
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
