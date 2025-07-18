import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Gorebyss",
         ja: "ゴアビー",
         fr: "Gorebyss",
         de: "Gorebyss",
         es: "Gorebyss",
         it: "Gorebyss",
         pt: "Gorebyss",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [368],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Stun Needle",
            ja: "スタンニードル",
            fr: "Aiguille étourdissante",
            de: "Betäubungsnadel",
            es: "Aguja",
            it: "Ago stordente",
            pt: "Agulha de atordoamento",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Mystic Water",
            ja: "神秘的な水",
            fr: "Eau mystique",
            de: "Mystisches Wasser",
            es: "Agua mística",
            it: "Acqua mistica",
            pt: "Água mística",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each Psychic Energy in play.",
            ja: "20ダメージに加えて、プレー中の精神エネルギーごとにさらに10ダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dégâts supplémentaires pour chaque énergie psychique en jeu.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede psychische Energie im Spiel.",
            es: "Hace 20 daños más 10 daños más por cada energía psíquica en juego.",
            it: "Fa 20 danni più 10 danni in più per ogni energia psichica in gioco.",
            pt: "Causam 20 danos mais 10 mais danos para cada energia psíquica em jogo.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
