import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Venonat",
         ja: "サブリナのヴェノナト",
         fr: "Venonat de Sabrina",
         de: "Sabrinas Venonat",
         es: "Venonat de Sabrina",
         it: "Venonat di Sabrina",
         pt: "Venonat de Sabrina",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [48],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poison Antennae",
            ja: "毒アンテナ",
            fr: "Antennes empoisonnées",
            de: "Giftantennen",
            es: "Antenas venenosas",
            it: "Antenne veleno",
            pt: "Antenas de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Removal Beam",
            ja: "除去ビーム",
            fr: "Faisceau de retrait",
            de: "Entfernungsstrahl",
            es: "Haz de eliminación",
            it: "Raggio di rimozione",
            pt: "Feixe de remoção",
          },
          effect: {
            en: "If the Defending Pokemon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it.",
            ja: "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1つを選択して廃棄します。",
            fr: "Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, retournez une pièce. Si les têtes, choisissez 1 de ces cartes d'énergie et jetez-la.",
            de: "Wenn das verteidigende Pokemon an Energiekarten angebracht ist, drehen Sie eine Münze. Wenn Sie Köpfe haben, wählen Sie 1 dieser Energiekarten und verwerfen Sie es.",
            es: "Si el Pokémon defensor tiene alguna tarjeta de energía unida, voltea una moneda. Si se dirige, elija 1 de esas tarjetas de energía y deséchela.",
            it: "Se il Pokemon in difesa ha delle carte di energia ad esso collegate, capovolgi una moneta. Se la testa, scegli 1 di quelle carte energetiche e scartalo.",
            pt: "Se o Pokémon atual tiver algum cartão de energia anexado a ele, vire uma moeda. Se as cabeças, escolha 1 dessas cartas de energia e descarte -as.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
