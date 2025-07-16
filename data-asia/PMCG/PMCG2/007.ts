import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Butterfree",
         ja: "蝶",
         fr: "Papillon",
         de: "Butterfree",
         es: "Libre de mantequilla",
         it: "Butterfree",
         pt: "Sem borboleta",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [12],
      hp: 70,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Whirlwind",
            ja: "旋風",
            fr: "Tourbillon",
            de: "Wirbelwind",
            es: "Torbellino",
            it: "Turbine",
            pt: "Turbilhão",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant. (Faites les dégâts avant de changer le pokemon.)",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno. (Haz el daño antes de cambiar el Pokémon).",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Grass", "Grass"],
          name: {
            en: "Mega Drain",
            ja: "メガドレイン",
            fr: "Méga drainage",
            de: "Mega Drain",
            es: "Mega drenaje",
            it: "Mega drenaggio",
            pt: "Mega dreno",
          },
          effect: {
            en: "Remove a number of damage counters from Butterfree equal to half the damage done to the Defending Pokemon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Butterfree has fewer damage counters than that, remove all of them.",
            ja: "防御ポケモンに与えられたダメージの半分に等しいバタフリーから多数のダメージカウンターを削除します（脱力と抵抗を適用した後）（最も近い10に丸められています）。蝶のダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Retirez un certain nombre de compteurs de dommages dufree égal à la moitié des dommages causés au Pokémon en défense (après avoir appliqué une faiblesse et une résistance) (arrondi jusqu'au 10 le plus proche). Si Butterfree a moins de compteurs de dégâts que cela, retirez tous.",
            de: "Entfernen Sie eine Reihe von Schadenszähler von Schmetterlingsgräben entspricht der Hälfte der Schäden, die dem verteidigenden Pokémon angerichtet wurden (nachdem Sie Schwäche und Widerstand aufgetragen haben) (abgerundet auf die nächstgelegene 10). Wenn Butterfree weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Retire una serie de contadores de daño de ButterFree igual a la mitad del daño causado al Pokémon defensor (después de aplicar debilidad y resistencia) (redondeado hasta los 10 más cercanos). Si ButterFree tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere una serie di contatori di danno da Butterfree pari alla metà del danno fatto al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza) (arrotondato fino ai 10 più vicini). Se Butterfree ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Remova uma série de contadores de danos da isca de borboleta igual à metade dos danos causados ao Pokémon defensivo (após aplicar fraqueza e resistência) (arredondado para os 10 mais próximos). Se a sem -borboleta tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
