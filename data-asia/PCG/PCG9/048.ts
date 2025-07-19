import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Dewgong (Delta Species)",
         ja: "デューゴン（デルタ種）",
         fr: "Dewgong (espèces delta)",
         de: "Dewgong (Delta -Arten)",
         es: "Dewgong (especie delta)",
         it: "Dewgong (Delta Species)",
         pt: "Dewgong (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [87],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Delta Protection",
            ja: "デルタ保護",
            fr: "Delta Protection",
            de: "Deltaschutz",
            es: "Protección delta",
            it: "Protezione delta",
            pt: "Proteção Delta",
          },
          effect: {
            en: "Any damage done to Dewgong by attacks from your opponent's PokÃ©mon that has  on its card is reduced by 40 (after applying Weakness and Resistance).",
            ja: "カードにある相手のPokã©Monからの攻撃によってDewgongに与えられた損害は、40倍に削減されます（脱力感と抵抗を適用した後）。",
            fr: "Tout dommage causé à Dewgong par les attaques du poké mon de votre adversaire qui a sur sa carte est réduit de 40 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden, die Dewgong durch Angriffe aus dem Poké mon Ihres Gegners, der auf seiner Karte hat, um 40 reduziert wird (nachdem Schwäche und Widerstand angewendet wurden).",
            es: "Cualquier daño hecho a Dewgong por ataques del Poké Mon de tu oponente que tiene en su carta se reduce en 40 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Dewgong dagli attacchi del poké del tuo avversario che ha sulla sua carta è ridotto di 40 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado ao orvalho por ataques do Poké Mon do seu oponente que possui em seu cartão é reduzido em 40 (depois de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Ice Beam",
            ja: "アイスビーム",
            fr: "Faisceau de glace",
            de: "Eisstrahl",
            es: "Haz de hielo",
            it: "Raggio di ghiaccio",
            pt: "Feixe de gelo",
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
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Surge",
            ja: "うねり",
            fr: "Surtension",
            de: "Anstieg",
            es: "Aumento",
            it: "Ondeggiare",
            pt: "Surto",
          },
          effect: {
            en: "If Dewgong has at least 2 Water Energy attached to it, this attack does 40 damage plus 20 more damage.",
            ja: "Dewgongに少なくとも2つの水エネルギーが付着している場合、この攻撃は40のダメージと20のダメージを与えます。",
            fr: "Si Dewgong a au moins 2 énergie d'eau qui y est attachée, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn Dewgong mindestens 2 Wasserenergie anhält, verursacht dieser Angriff 40 Schäden plus 20 weitere Schäden.",
            es: "Si Dewgong tiene al menos 2 energía de agua unida a ella, este ataque hace 40 daños más 20 más de daño.",
            it: "Se Dewgong ha almeno 2 energia idrica attaccata ad esso, questo attacco infligge 40 danni più 20 danni in più.",
            pt: "Se o Dewgong tiver pelo menos 2 energia hídrica ligada a ele, esse ataque causará 40 danos mais 20 danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
