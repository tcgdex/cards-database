import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Starmie",
         ja: "スターミー",
         fr: "Starmie",
         de: "Starmie",
         es: "Páramo",
         it: "Starmie",
         pt: "Starmie",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [121],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Core Guard",
            ja: "コアガード",
            fr: "Garde de base",
            de: "Kernwache",
            es: "Guardia central",
            it: "Guardia centrale",
            pt: "Guarda do núcleo",
          },
          effect: {
            en: "As long as Starmie has any Psychic Energy attached to it, damage done to Starmie by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "スターミーに精神的なエネルギーが付着している限り、攻撃によってスターミーに与えられた損傷は10増加します（衰弱と抵抗を適用した後）。",
            fr: "Tant que Starmie a une énergie psychique qui lui est attachée, les dommages causés à Starmie par les attaques sont réduits de 10 (après application de la faiblesse et de la résistance).",
            de: "Solange Starmie eine psychische Energie hat, wird durch Angriffe durch Angriffe Schäden an STARRIE geführt (nach Auftragen von Schwäche und Widerstand).",
            es: "Mientras Starmie tenga alguna energía psíquica adjunta, el daño hecho a Starmie por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Finché Starmie ha un'energia psichica attaccata ad essa, il danno fatto a Starmie dagli attacchi è ridotto di 10 (dopo aver applicato debolezza e resistenza).",
            pt: "Enquanto a Starmie tiver qualquer energia psíquica ligada a ela, os danos causados a Starmie por ataques são reduzidos em 10 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Energy Flip",
            ja: "エネルギーフリップ",
            fr: "Flip énergétique",
            de: "Energieflip",
            es: "Flip de energía",
            it: "Flip di energia",
            pt: "Flip de energia",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon. This attack does 10 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.) You may move an Energy attached to that Pokemon to another of your opponent's Pokemon.",
            ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）そのポケモンに取り付けられたエネルギーを、相手のポケモンの別のポケモンに移動できます。",
            fr: "Choisissez 1 des Pokémon bancés de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance du Pokémon banc.) Vous pouvez déplacer une énergie attachée à ce Pokémon à un autre Pokémon de votre adversaire.",
            de: "Wählen Sie 1 der Bankpokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Sie können eine Energie an dieses Pokémon an einen anderen Pokémon Ihres Gegners verschieben.",
            es: "Elija 1 de los Pokémon de banca de tu oponente. Este ataque hace 10 daños a ese Pokémon. (No aplique debilidad y resistencia para los Pokémon de banca). Puede mover una energía unida a ese Pokémon a otro Pokémon de su oponente.",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Puoi spostare un'energia attaccata a quel Pokemon a un altro Pokemon del tuo avversario.",
            pt: "Escolha 1 do Pokémon bancado do seu oponente. Este ataque causa 10 danos a esse Pokémon. (Não aplique fraqueza e resistência ao Pokemon em bancada.) Você pode mover uma energia ligada a esse Pokémon a outro dos Pokémon do seu oponente.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Psychic Boom",
            ja: "サイキックブーム",
            fr: "Boom psychique",
            de: "Psychischer Boom",
            es: "Boom psíquico",
            it: "Boom psichico",
            pt: "Boom psíquico",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokemon.",
            ja: "ディフェンディングポケモンに付随する各エネルギーに対して、10ダメージに加えて10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée au Pokémon en défense.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energie.",
            es: "Hace 10 daños más 10 daños más por cada energía unida al Pokémon defensor.",
            it: "Fa 10 danni più 10 danni in più per ogni energia attaccata al Pokemon in difesa.",
            pt: "10 danos mais 10 mais danos para cada energia ligada ao pokemon defensor.",
          },
        },
      ],

      retreat: 1,

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
