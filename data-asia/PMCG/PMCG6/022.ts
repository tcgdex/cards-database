import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Venomoth",
         ja: "サブリナの毒液",
         fr: "Venomoth de Sabrina",
         de: "Sabrinas Gift",
         es: "Venomio de Sabrina",
         it: "Venomoth di Sabrina",
         pt: "Venomoth de Sabrina",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [49],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Healing Pollen",
            ja: "癒しの花粉",
            fr: "Pollen de guérison",
            de: "Pollen heilen",
            es: "Polen curativo",
            it: "Guarigione del polline",
            pt: "Pólen de cura",
          },
          effect: {
            en: "Flip 3 coins. For each heads, remove 1 damage counter from each of your Pokemon. If a Pokemon has fewer damage counters than the number of heads, remove all of them.",
            ja: "3コインをフリップします。各ヘッドについて、各ポケモンから1つのダメージカウンターを取り外します。ポケモンがヘッド数よりもダメージカウンターが少ない場合は、それらすべてを削除します。",
            fr: "Flip 3 pièces. Pour chaque tête, retirez 1 compteur de dégâts de chacun de vos Pokémon. Si un Pokémon a moins de compteurs de dégâts que le nombre de têtes, retirez-les tous.",
            de: "3 Münzen umdrehen. Entfernen Sie für jeden Köpfe 1 Schadenschalter von jedem Ihrer Pokémon. Wenn ein Pokémon weniger Schadenszähler hat als die Anzahl der Köpfe, entfernen Sie alle.",
            es: "Flip 3 monedas. Para cada cabezal, retire 1 contador de daño de cada uno de sus Pokémon. Si un Pokémon tiene menos contadores de daño que la cantidad de cabezas, retírelos todos.",
            it: "Flip 3 monete. Per ogni testa, rimuovere 1 contatore di danni da ciascuno dei Pokemon. Se un Pokemon ha meno contatori di danno rispetto al numero di teste, rimuovili tutti.",
            pt: "Flip 3 moedas. Para cada cabeça, remova 1 contador de danos de cada um dos seus Pokémon. Se um Pokémon tiver menos contadores de danos do que o número de cabeças, remova todos eles.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Sonic Distortion",
            ja: "音の歪み",
            fr: "Distorsion sonore",
            de: "Klangverzerrung",
            es: "Distorsión sónica",
            it: "Distorsione sonora",
            pt: "Distorção sônica",
          },
          effect: {
            en: "Flip 2 coins. If 1 or both of them are heads, the Defending Pokemon is now Confused.",
            ja: "2つのコインをフリップします。それらの1つまたは両方がヘッドである場合、防御ポケモンは今混乱しています。",
            fr: "Flip 2 pièces. Si 1 ou les deux sont des têtes, le Pokémon en défense est maintenant confus.",
            de: "2 Münzen umdrehen. Wenn 1 oder beide Köpfe sind, ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Flip 2 monedas. Si 1 o ambos son cabezas, el Pokémon defensor ahora está confundido.",
            it: "Flip 2 monete. Se 1 o entrambi sono teste, il Pokemon in difesa è ora confuso.",
            pt: "Flip 2 moedas. Se 1 ou ambos são cabeças, o Pokémon atual agora está confuso.",
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
