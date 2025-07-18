import {Card} from "../../../interfaces"
import Set from "../ADV4"

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
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Water Arrow",
            ja: "水の矢",
            fr: "Flèche d'eau",
            de: "Wasserpfeil",
            es: "Flecha de agua",
            it: "Freccia d'acqua",
            pt: "Seta de água",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Rainbow Star",
            ja: "レインボースター",
            fr: "Étoile arc-en-ciel",
            de: "Regenbogenstern",
            es: "Estrella del arcoiris",
            it: "Rainbow Star",
            pt: "Estrela do arco -íris",
          },
          effect: {
            en: "Does 50 damage plus 10 more damage for each type of basic Energy attached to the Defending Pokemon.",
            ja: "防御ポケモンに取り付けられた各タイプの基本エネルギーに対して、50のダメージと10ダメージがさらに10ダメージを与えます。",
            fr: "Fait 50 dégâts plus 10 dommages supplémentaires pour chaque type d'énergie de base attachée au Pokémon en défense.",
            de: "Fügt 50 Schäden plus 10 weitere Schäden für jede Art von Basisenergie, die an das verteidigende Pokémon angebracht ist.",
            es: "Hace 50 daños más 10 daños más para cada tipo de energía básica unida al Pokémon defensor.",
            it: "Fa 50 danni più 10 danni in più per ciascun tipo di energia di base collegata al Pokemon in difesa.",
            pt: "Causam 50 danos mais 10 mais danos para cada tipo de energia básica ligada ao pokemon defensor.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
