import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Camerupt",
         ja: "カメラプ",
         fr: "CamerUpt",
         de: "Kamerupt",
         es: "Ceroupt",
         it: "Camerupt",
         pt: "Câmera",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [323],
      hp: 80,
      types: ["Fire"],
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
            en: "Any damage done to Camerupt by attacks from your opponent's PokÃ©mon that has  on its card is reduced by 40 (after applying Weakness and Resistance).",
            ja: "カードにある相手のPokã©Monからの攻撃により、カメラプトに与えられた損害は40削減されます（脱力感と抵抗を適用した後）。",
            fr: "Tout dommage causé à Camerupt par des attaques de la poké de votre adversaire qui a sur sa carte est réduit de 40 (après avoir appliqué la faiblesse et la résistance).",
            de: "Alle Schäden, die durch Angriffe aus dem Poké mon Ihres Gegners, der auf seiner Karte entstanden ist, angerichtet wird, wird um 40 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño hecho a Camerupt por ataques del Poké Mon de tu oponente que tiene en su carta se reduce en 40 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Camerupt dagli attacchi del poké del tuo avversario che ha sulla sua carta è ridotto di 40 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado à câmera por ataques do Poké Mon do seu oponente que possui em seu cartão é reduzido em 40 (depois de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Linear Attack",
            ja: "線形攻撃",
            fr: "Attaque linéaire",
            de: "Linearer Angriff",
            es: "Ataque lineal",
            it: "Attacco lineare",
            pt: "Ataque linear",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Combustion",
            ja: "燃焼",
            fr: "Combustion",
            de: "Verbrennung",
            es: "Combustión",
            it: "Combustione",
            pt: "Combustão",
          },
          damage: 50,
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
