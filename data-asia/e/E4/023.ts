import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Staryu - 023/088",
         ja: "staryu -023/088",
         fr: "Staryu - 023/088",
         de: "STARYU - 023/088",
         es: "Staryu - 023/088",
         it: "Staryu - 023/088",
         pt: "Staryu - 023/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [120],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Healing",
            ja: "エネルギーヒーリング",
            fr: "Guérison d'énergie",
            de: "Energieheilung",
            es: "Curación de energía",
            it: "Guarigione energetica",
            pt: "Cura de energia",
          },
          effect: {
            en: "Remove 2 damage counters from Staryu for each Energy attached to it. If it has fewer damage counters than that, remove all of them.",
            ja: "それに取り付けられた各エネルギーについて、Staryuから2つのダメージカウンターを削除します。それよりもダメージカウンターが少ない場合は、それらすべてを削除します。",
            fr: "Retirez 2 compteurs de dégâts de Staryu pour chaque énergie qui y est attachée. S'il a moins de compteurs de dégâts que cela, retirez tous.",
            de: "Entfernen Sie 2 Schadenszähler aus Staryu für jede daran befestigte Energie. Wenn es weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Retire 2 contadores de daño de Staryu para cada energía unida a él. Si tiene menos contadores de daño que eso, retírelos todos.",
            it: "Rimuovere 2 contatori di danno da Staryu per ogni energia attaccata ad essa. Se ha meno contatori di danno di quello, rimuovili tutti.",
            pt: "Remova 2 contadores de danos do Staryu para cada energia anexada a ele. Se tiver menos contadores de danos do que isso, remova todos eles.",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Doubleslap",
            ja: "doubleslap",
            fr: "Double",
            de: "Doppelklappe",
            es: "Duplana",
            it: "Doppbleslap",
            pt: "Doubleslap",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
      ],

      retreat: 1,

};
