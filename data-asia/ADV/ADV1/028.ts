import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Kirlia",
         ja: "キルリア",
         fr: "Kirlia",
         de: "Kliria",
         es: "Kirlia",
         it: "Kirlia",
         pt: "Kirlia",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [281],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Dazzle Dance",
            ja: "まばゆいばかりのダンス",
            fr: "Danse éblouissante",
            de: "Dazzle Tanz",
            es: "Baile deslumbrante",
            it: "Danza dazzera",
            pt: "Dazzle Dance",
          },
          effect: {
            en: "Flip a coin. If heads, each Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンはそれぞれ混乱しています。",
            fr: "Retourner une pièce. Si les têtes, chaque Pokémon défendant est maintenant confus.",
            de: "Eine Münze drehen. Bei Köpfen ist jedes verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, cada Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, ogni Pokemon in difesa è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, cada Pokemon defensor agora está confuso.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Life Drain",
            ja: "生命排水",
            fr: "Vidage",
            de: "Lebensabfluss",
            es: "Drenaje de la vida",
            it: "Scarico della vita",
            pt: "Dreno da vida",
          },
          effect: {
            en: "Flip a coin. If heads, put damage counters on the Defending Pokemon until it is 10 HP away from being Knocked Out.",
            ja: "コインをひっくり返します。頭の場合は、ダメージを塗るポケモンにダメージカウンターを入れて、ノックアウトから10 hp離れています。",
            fr: "Retourner une pièce. Si les têtes, mettez les compteurs de dégâts sur le Pokémon en défense jusqu'à ce qu'il soit à 10 ch de l'associé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe auf dem verteidigenden Pokémon schaden, bis es 10 HP entfernt ist, wird es entfernt.",
            es: "Voltea una moneda. Si se dirige, coloque los contadores de daño en el Pokémon defensor hasta que esté a 10 hp de ser noqueado.",
            it: "Capovolgi una moneta. Se le teste, metti i contatori di danno sul Pokemon in carica fino a quando non è a 10 CV dall'essere eliminato.",
            pt: "Vire uma moeda. Se as cabeças, coloque os contadores de danos no Pokémon atual até que ele esteja a 10 hp de ser nocauteado.",
          },
        },
      ],

      retreat: 1,

};
