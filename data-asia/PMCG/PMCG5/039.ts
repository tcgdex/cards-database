import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Magnemite (Lv.10)",
         ja: "Surgeのマグネマイト中,、 Lv.10）",
         fr: "Le lieutenant-magnémite du lieutenant (LV.10)",
         de: "Lt. Surge's Magnemit (Lv.10)",
         es: "Magnemite del teniente Surge (LV.10)",
         it: "Tenente Magnemite di Surge (Lv.10)",
         pt: "Magnemita do tenente Surge (LV.10)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [81],
      hp: 30,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Removal Pulse",
            ja: "除去パルス",
            fr: "Impulsion de retrait",
            de: "Pulsentfernung",
            es: "Pulso de eliminación",
            it: "Impulso di rimozione",
            pt: "Pulso de remoção",
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
          damage: 10,
        },
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Confusion Pulse",
            ja: "混乱パルス",
            fr: "Impulsion de confusion",
            de: "Verwirrungsimpuls",
            es: "Pulso de confusión",
            it: "Impulso di confusione",
            pt: "Pulso de confusão",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 20,
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
