import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Mewtwo",
         ja: "ロケットのミュウツー",
         fr: "Mewtwo de Rocket",
         de: "Rocket's Mewtwo",
         es: "Mewtwo de Rocket",
         it: "Rocket's Mewtwo",
         pt: "Rocket's Mewtwo",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [150],
      hp: 70,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Juxtapose",
            ja: "並置",
            fr: "Juxtaposer",
            de: "Nebeneinander",
            es: "Yuxtaponer",
            it: "Giustapporre",
            pt: "Justapor",
          },
          effect: {
            en: "Flip a coin. If heads, switch the number of damage counters on Rocket's Mewtwo with the number of damage counters on the Defending Pokemon (even if it would Knock Out either Pokemon). (It's okay if 1 of the Pokemon has no damage counters on it.)",
            ja: "コインをひっくり返します。ヘッドの場合、RocketのMewtwoのダメージカウンターの数を、防御ポケモンのダメージカウンターの数を切り替えます（たとえそれがどちらのポケモンをノックアウトしますか）。 （ポケモンの1つにダメージカウンターがない場合は大丈夫です。）",
            fr: "Retourner une pièce. Si les têtes, changez le nombre de compteurs de dégâts sur le Mewtwo de Rocket avec le nombre de compteurs de dégâts sur le Pokémon en défense (même si cela éliminait l'un ou l'autre Pokémon). (C'est bon si un Pokémon n'a pas de compteurs de dégâts dessus.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, wechseln Sie die Anzahl der Schadenszähler auf Rockets Mewtwo mit der Anzahl der Schadenszähler auf dem verteidigenden Pokemon (auch wenn es eines der beiden Pokemon ausschlägt). (Es ist in Ordnung, wenn 1 des Pokémon keine Schadenszähler hat.)",
            es: "Voltea una moneda. Si se dirige, cambie el número de contadores de daño en el Mewtwo de Rocket con la cantidad de contadores de daño en el Pokémon defensor (incluso si noqueaba a cualquiera de los Pokémon). (Está bien si 1 del Pokémon no tiene contadores de daño).",
            it: "Capovolgi una moneta. Se le teste, cambia il numero di contatori di danno sul mewtwo di Rocket con il numero di contatori di danno sul Pokemon in difesa (anche se eliminasse uno dei Pokemon). (Va bene se 1 del Pokemon non ha contatori di danni su di esso.)",
            pt: "Vire uma moeda. Se as cabeças, alterne o número de contadores de danos no Mewtwo do Rocket com o número de contadores de danos no Pokémon atual (mesmo que isso derrubasse o Pokemon). (Tudo bem se 1 do Pokemon não tiver contadores de danos.)",
          },
        },
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Hypnoblast",
            ja: "催眠芽球",
            fr: "Hypnoblaste",
            de: "Hypnoblast",
            es: "Hipnoblasto",
            it: "Ipnoblasto",
            pt: "Hipnoblasto",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
