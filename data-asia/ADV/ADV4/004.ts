import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Gloom",
         ja: "暗闇",
         fr: "Obscurité",
         de: "Düsternis",
         es: "Oscuridad",
         it: "Oscurità",
         pt: "Melancolia",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [44],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Cling",
            ja: "しがみつく",
            fr: "S'accrocher",
            de: "Haften",
            es: "Adherirse",
            it: "Aggrapparsi",
            pt: "Agarrar -se",
          },
          effect: {
            en: "After your attack, remove from Gloom the number of damage counters equal to the damage you did to the Defending Pokemon.  If Gloom has fewer damage counters than that, remove all of them.",
            ja: "攻撃の後、暗闇から削除して、防御ポケモンに与えた損害に等しいダメージカウンターの数を削除します。  Gloomのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Après votre attaque, retirez de la morosité le nombre de compteurs de dégâts égaux aux dégâts que vous avez causés au Pokémon en défense.  Si la morosité a moins de compteurs de dégâts que cela, retirez tous.",
            de: "Entfernen Sie nach Ihrem Angriff die Anzahl der Schadenszähler, die dem Schaden entspricht, den Sie dem verteidigenden Pokémon angerichtet haben.  Wenn Dunkelheit weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Después de su ataque, retire de la penumbra el número de contadores de daño igual al daño que hizo al Pokémon defensor.  Si la penumbra tiene menos contadores de daño que eso, retírelos todos.",
            it: "Dopo l'attacco, rimuovi dall'oscurità il numero di contatori di danno pari al danno che hai fatto al Pokemon in difesa.  Se l'oscurità ha meno contatori di danno di quello, rimuovili tutti.",
            pt: "Após o seu ataque, retire da escuridão o número de contadores de danos iguais aos danos que você causou ao Pokémon defensivo.  Se a escuridão tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Double Razor Leaf",
            ja: "ダブルレザーの葉",
            fr: "Feuille de rasoir double",
            de: "Doppel -Rasiererblatt",
            es: "Hoja de afeitar doble",
            it: "Doppia foglia di rasoio",
            pt: "Folha de barbear dupla",
          },
          effect: {
            en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Flip 2 pièces. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 40 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 40 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 40 danos vezes o número de cabeças.",
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
