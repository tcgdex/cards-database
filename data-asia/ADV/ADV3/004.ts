import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Nincada",
         ja: "NINCADA",
         fr: "Nincada",
         de: "Nincada",
         es: "Nincada",
         it: "Nincada",
         pt: "Nincada",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [290],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
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
            en: "After your attack, remove from Nincada the number of damage counters equal to the damage you did to the Defending Pokemon. If Nincada has fewer damage counters than that, remove all of them.",
            ja: "攻撃後、NINCADAからディフェンディングポケモンに与えた損害に等しい損害カウンターの数を取り除きます。 NINCADAのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Après votre attaque, retirez de Nincada le nombre de compteurs de dégâts égaux aux dégâts que vous avez causés au Pokémon en défense. Si Nincada a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Entfernen Sie nach Ihrem Angriff die Anzahl der Schäden, die dem Schaden, den Sie dem verteidigenden Pokemon angerichtet haben, die Anzahl der Schadenszähler entfernen. Wenn Nincada weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Después de su ataque, retire de Nincada el número de contadores de daño igual al daño que hizo al Pokémon defensor. Si Nincada tiene menos contadores de daño que eso, retírelos todos.",
            it: "Dopo l'attacco, rimuovi da Nincada il numero di contatori di danno pari al danno che hai fatto al Pokemon in difesa. Se Nincada ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Após o seu ataque, retire de Nincada o número de contadores de danos iguais aos danos que você causou ao Pokémon defensivo. Se Nincada tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
