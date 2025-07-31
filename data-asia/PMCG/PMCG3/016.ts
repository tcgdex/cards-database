import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Golduck",
         ja: "ゴルダック",
         fr: "Golduck",
         de: "Golduck",
         es: "Dorado",
         it: "Golduck",
         pt: "Golduck",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [55],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psyshock",
            ja: "PsyShock",
            fr: "Psychock",
            de: "Psyshock",
            es: "Psíquico",
            it: "Psyshock",
            pt: "Psyshock",
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
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Hyper Beam",
            ja: "ハイパービーム",
            fr: "Hyper faisceau",
            de: "Hyperstrahl",
            es: "Hiper viga",
            it: "Hyper Beam",
            pt: "Hyper Beam",
          },
          effect: {
            en: "If the Defending Pokemon has any Energy cards attached to it, choose 1 of them and discard it.",
            ja: "防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
            fr: "Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, choisissez-y 1 et jetez-la.",
            de: "Wenn das verteidigende Pokémon an Energiekarten verbunden ist, wählen Sie 1 davon und verwerfen Sie es.",
            es: "Si el Pokémon defensor tiene alguna tarjetas de energía unidas, elija 1 de ellas y deséchela.",
            it: "Se il Pokemon in difesa ha delle carte energetiche ad esso collegate, scegli 1 e scartalo.",
            pt: "Se o Pokémon atual tiver algum cartão de energia anexado a ele, escolha 1 deles e descarte -o.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
