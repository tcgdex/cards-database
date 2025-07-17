import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Venomoth",
         ja: "venomoth",
         fr: "Venomoth",
         de: "Venomoth",
         es: "Veneno",
         it: "Venomoth",
         pt: "Venomoth",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [49],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Healing Dust",
            ja: "癒しのほこり",
            fr: "Poussière de guérison",
            de: "Heilstaub",
            es: "Polvo curativo",
            it: "Polvere di guarigione",
            pt: "Pó de cura",
          },
          effect: {
            en: "Flip 2 coins. For each heads, remove 1 damage counter from each of your Pokemon. If a Pokemon has fewer damage counters than the number of heads, remove all of them.",
            ja: "2つのコインをフリップします。各ヘッドについて、各ポケモンから1つのダメージカウンターを取り外します。ポケモンがヘッド数よりもダメージカウンターが少ない場合は、それらすべてを削除します。",
            fr: "Flip 2 pièces. Pour chaque tête, retirez 1 compteur de dégâts de chacun de vos Pokémon. Si un Pokémon a moins de compteurs de dégâts que le nombre de têtes, retirez-les tous.",
            de: "2 Münzen umdrehen. Entfernen Sie für jeden Köpfe 1 Schadenschalter von jedem Ihrer Pokémon. Wenn ein Pokémon weniger Schadenszähler hat als die Anzahl der Köpfe, entfernen Sie alle.",
            es: "Flip 2 monedas. Para cada cabezal, retire 1 contador de daño de cada uno de sus Pokémon. Si un Pokémon tiene menos contadores de daño que la cantidad de cabezas, retírelos todos.",
            it: "Flip 2 monete. Per ogni testa, rimuovere 1 contatore di danni da ciascuno dei Pokemon. Se un Pokemon ha meno contatori di danno rispetto al numero di teste, rimuovili tutti.",
            pt: "Flip 2 moedas. Para cada cabeça, remova 1 contador de danos de cada um dos seus Pokémon. Se um Pokémon tiver menos contadores de danos do que o número de cabeças, remova todos eles.",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Miracle Powder",
            ja: "ミラクルパウダー",
            fr: "Poudre miracle",
            de: "Wunderpulver",
            es: "Polacol en polvo",
            it: "Polvere miracolosa",
            pt: "Milagre em pó",
          },
          effect: {
            en: "Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokemon is now affected by that Special Condition.",
            ja: "コインをひっくり返します。頭の場合は、特別な状態を選択します（眠り、燃やし、混乱し、麻痺し、毒されます）。防御ポケモンは現在、その特別な状態の影響を受けています。",
            fr: "Retourner une pièce. Si les têtes, choisissez une condition spéciale (endormie, brûlée, confuse, paralysée ou empoisonnée). Le Pokémon en défense est désormais affecté par cette condition spéciale.",
            de: "Eine Münze drehen. Wenn Köpfe, wählen Sie einen besonderen Zustand (schlafend, verbrannt, verwirrt, gelähmt oder vergiftet). Das verteidigende Pokémon ist jetzt von dieser besonderen Erkrankung betroffen.",
            es: "Voltea una moneda. Si se dirige, elija una condición especial (dormida, quemada, confundida, paralizada o envenenada). El Pokémon defensor ahora se ve afectado por esa condición especial.",
            it: "Capovolgi una moneta. Se le teste, scegli una condizione speciale (addormentata, bruciata, confusa, paralizzata o avvelenata). Il Pokemon in carica è ora influenzato da quella condizione speciale.",
            pt: "Vire uma moeda. Se as cabeças, escolha uma condição especial (adormecida, queimada, confusa, paralisada ou envenenada). O Pokémon atual agora é afetado por essa condição especial.",
          },
          damage: 30,
        },
      ],


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
