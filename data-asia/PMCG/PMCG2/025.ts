import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Electrode",
         ja: "電極",
         fr: "Électrode",
         de: "Elektrode",
         es: "Electrodo",
         it: "Elettrodo",
         pt: "Eletrodo",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [101],
      hp: 90,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning"],
          name: {
            en: "Chain Lightning",
            ja: "チェーンライトニング",
            fr: "Éclair de chaîne",
            de: "Kettenblitz",
            es: "Rayo de cadena",
            it: "Lampo a catena",
            pt: "Lightning Chain",
          },
          effect: {
            en: "If the Defending Pokemon isn't Colorless, this attack does 10 damage to each Benched Pokemon of the same type as the Defending Pokemon (including your own). (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "防御ポケモンが無色でない場合、この攻撃は、防御ポケモン（あなた自身を含む）と同じタイプの各ベンチポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si le Pokémon en défense n'est pas incolore, cette attaque fait 10 dégâts à chaque pokemon bancé du même type que le Pokémon en défense (y compris le vôtre). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn das verteidigende Pokémon nicht farblos ist, schädigt dieser Angriff 10 an jedem Bankpokémon mit dem gleichen Typ wie der verteidigende Pokemon (einschließlich Ihrer eigenen). (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si el Pokémon defensor no es incoloro, este ataque hace 10 daños a cada Pokémon de banca del mismo tipo que el Pokémon defensor (incluido el tuyo). (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il Pokemon in difesa non è incolore, questo attacco infligge 10 danni a ciascun Pokemon in panchina dello stesso tipo del Pokemon in difesa (incluso il tuo). (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o Pokémon atual não for incolor, esse ataque causará 10 danos a cada Pokémon em banco do mesmo tipo que o Pokémon defensor (incluindo o seu). (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
