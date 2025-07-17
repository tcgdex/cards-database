import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Delibird",
         ja: "Delibird",
         fr: "Déliber",
         de: "Delibird",
         es: "Parrilla",
         it: "Delird",
         pt: "Delibird",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [225],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Present",
            ja: "現在",
            fr: "Présent",
            de: "Gegenwärtig",
            es: "Presente",
            it: "Presente",
            pt: "Presente",
          },
          effect: {
            en: "Flip 3 coins. If exactly 1 is heads, this attack does 40 damage. If exactly 2 are heads, remove 3 damage counters from the Defending Pokemon. If the Defending Pokemon has fewer damage counters than that, remove all of them. If all 3 are heads, this attack does 60 damage. If all 3 are tails, remove all damage counters from the Defending Pokemon.",
            ja: "3コインをフリップします。正確に1がヘッドの場合、この攻撃は40のダメージを与えます。正確に2がヘッドの場合、防御ポケモンから3つのダメージカウンターを削除します。防御するポケモンのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。 3つすべてがヘッドである場合、この攻撃は60のダメージを与えます。 3つすべてがテールの場合、防御ポケモンからすべてのダメージカウンターを削除します。",
            fr: "Flip 3 pièces. Si exactement 1 est la tête, cette attaque fait 40 dégâts. Si exactement 2 sont des têtes, retirez 3 compteurs de dégâts du Pokémon en défense. Si le Pokémon en défense a moins de compteurs de dégâts que cela, retirez-les tous. Si les 3 sont les têtes, cette attaque fait 60 dégâts. Si les 3 sont des queues, retirez tous les compteurs de dégâts du Pokémon en défense.",
            de: "3 Münzen umdrehen. Wenn genau 1 Köpfe ist, verursacht dieser Angriff 40 Schaden. Wenn genau 2 Köpfe sind, entfernen Sie 3 Schadenszähler aus dem verteidigenden Pokémon. Wenn das verteidigende Pokémon weniger Schadenszähler als das hat, entfernen Sie alle. Wenn alle 3 Köpfe sind, verursacht dieser Angriff 60 Schaden. Wenn alle 3 Schwänze sind, entfernen Sie alle Schadenszähler aus dem verteidigenden Pokémon.",
            es: "Flip 3 monedas. Si exactamente 1 es cabezas, este ataque hace 40 daños. Si exactamente 2 son cabezas, retire 3 contadores de daño del Pokémon defensor. Si el Pokémon defensor tiene menos contadores de daño que eso, retírelos todos. Si los 3 son cabezas, este ataque hace 60 daños. Si los 3 son colas, retire todos los contadores de daño del Pokémon defensor.",
            it: "Flip 3 monete. Se esattamente 1 è testa, questo attacco fa 40 danni. Se esattamente 2 sono teste, rimuovere 3 contatori di danno dal Pokemon in difesa. Se il Pokemon in carica ha meno contatori di danno di quello, rimuovi tutti. Se tutti e 3 sono teste, questo attacco infligge 60 danni. Se tutte e 3 sono code, rimuovere tutti i contatori di danno dal Pokemon in difesa.",
            pt: "Flip 3 moedas. Se exatamente 1 for cabeças, esse ataque causará 40 danos. Se exatamente 2 forem cabeças, remova 3 contadores de danos do Pokémon atual. Se o Pokémon atual tiver menos contadores de danos do que isso, remova todos eles. Se todos os três são cabeças, esse ataque causará 60 danos. Se todos os três forem caudas, remova todos os contadores de danos do Pokémon atual.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
