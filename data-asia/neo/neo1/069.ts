import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Miltank",
         ja: "ミルタンク",
         fr: "Miltan",
         de: "Miltank",
         es: "Miltaquero",
         it: "Miltank",
         pt: "Miltank",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [241],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Milk Drink",
            ja: "ミルクドリンク",
            fr: "Boisson lait",
            de: "Milchgetränk",
            es: "Bebida con leche",
            it: "Bevanda al latte",
            pt: "Bebida de leite",
          },
          effect: {
            en: "Flip 2 coins. Remove 2 damage counters times the number of heads from Miltank. If it has fewer damage counters than that, remove all of them.",
            ja: "2つのコインをフリップします。 2つのダメージカウンターを削除して、Miltankからヘッド数の時間を削除します。それよりもダメージカウンターが少ない場合は、それらすべてを削除します。",
            fr: "Flip 2 pièces. Retirer 2 compteurs de dégâts fois le nombre de têtes de miltank. S'il a moins de compteurs de dégâts que cela, retirez tous.",
            de: "2 Münzen umdrehen. Entfernen Sie 2 Schadenszähler mal die Anzahl der Köpfe von Miltank. Wenn es weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Flip 2 monedas. Elimine 2 contadores de daño, el número de cabezas de Miltank. Si tiene menos contadores de daño que eso, retírelos todos.",
            it: "Flip 2 monete. Rimuovere 2 contatori di danno volte il numero di teste da Miltank. Se ha meno contatori di danno di quello, rimuovili tutti.",
            pt: "Flip 2 moedas. Remova 2 contadores de danos vezes o número de cabeças de Miltank. Se tiver menos contadores de danos do que isso, remova todos eles.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
        },
      ],
};
