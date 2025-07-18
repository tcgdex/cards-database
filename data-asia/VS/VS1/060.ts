import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Jumpluff",
         ja: "エリカのジャンプラフ",
         fr: "Jumpluff d'Erika",
         de: "Erikas Jumpluff",
         es: "Jumpluff de Erika",
         it: "Il jumpuff di Erika",
         pt: "Erika Jumpluff",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [189],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Cotton Absorb",
            ja: "綿吸収",
            fr: "Absorber le coton",
            de: "Baumwollabsorb",
            es: "Absorber algodón",
            it: "Assorbimento di cotone",
            pt: "Algodão absorve",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads. Then, remove a number of damage counters from Erika's Jumpluff equal to the damage done to the Defending Pokemon (after applying Weakness and Resistance). If Erika's Jumpluff has fewer damage counters than that, remove all of them.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。次に、防御ポケモンに与えられたダメージに等しいエリカのジャンプラフから多くのダメージカウンターを削除します（脱力感と抵抗を適用した後）。 Erikaのジャンプラフのダメージカウンターがそれよりも少ない場合、それらすべてを削除します。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes. Ensuite, retirez un certain nombre de compteurs de dégâts du jumpluff d'Erika égal aux dommages causés au Pokémon en défense (après avoir appliqué une faiblesse et une résistance). Si Jumpluff d'Erika a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe. Entfernen Sie dann eine Reihe von Schadenszähnen aus Erika's Jumpluff entspricht der Schädigung, die dem verteidigenden Pokemon angerichtet wurde (nachdem Schwäche und Widerstand aufgetragen wurden). Wenn Erikas Jumpluff weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas. Luego, elimine una serie de contadores de daño de la Jumpluff de Erika igual al daño causado al Pokémon defensor (después de aplicar debilidad y resistencia). Si el jumpluff de Erika tiene menos contadores de daño que eso, retírelos todos.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste. Quindi, rimuovere una serie di contatori di danno dal jumpuff di Erika pari al danno fatto al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza). Se il jumpuff di Erika ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças. Em seguida, remova vários contadores de danos do jumpluff de Erika iguais aos danos causados ao Pokémon defensor (após aplicar fraqueza e resistência). Se o jumpluff de Erika tiver menos contadores de danos do que isso, remova todos eles.",
          },
        },
      ],

      retreat: 1,

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
