import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Altaria ex",
         ja: "Altaria Ex",
         fr: "Altaria ex",
         de: "Altaria ex",
         es: "Altaria ex",
         it: "Altaria ex",
         pt: "Altaria Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [334],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Mist",
            ja: "ミスト",
            fr: "Brume",
            de: "Nebel",
            es: "Neblina",
            it: "Nebbia",
            pt: "Névoa",
          },
          effect: {
            en: "Any damage done to Altaria ex by attacks from Stage 2 Evolved PokÃ©mon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance).",
            ja: "ステージ2の進化したポカモン（あなたと対戦相手の両方）からの攻撃によってaltaria Exに与えられた損害は30減少します（脱力感と抵抗を適用した後）。",
            fr: "Tout dommage causé à l'Altaria Ex par les attaques de l'étape 2 évolué Pokã © Mon (le vôtre et celui de votre adversaire) est réduit de 30 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden an Altaria EX durch Angriffe aus Stufe 2 entwickelten Poké Mon (sowohl Ihre als auch die Ihres Gegners), wird um 30 reduziert (nachdem Schwäche und Widerstand angewendet wurden).",
            es: "Cualquier daño hecho a Altaria EX por ataques de la etapa 2 evolucionó Poké Mon (tanto el tuyo como el de tu oponente) se reduce en 30 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno fatto ad Altaria ex dagli attacchi dalla fase 2 ha evoluto Poké mon (sia il tuo che il tuo avversario) è ridotto di 30 (dopo aver applicato debolezza e resistenza).",
            pt: "Qualquer dano causado a Altaria EX por ataques do estágio 2 evoluiu o Poké Mon (tanto o seu quanto o do seu oponente) é reduzido em 30 (depois de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Dive",
            ja: "ダイビング",
            fr: "Plonger",
            de: "Tauchen",
            es: "Bucear",
            it: "Tuffo",
            pt: "Mergulho",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Lightning", "Colorless"],
          name: {
            en: "Dragon Mist",
            ja: "ドラゴンミスト",
            fr: "Brume de dragon",
            de: "Dragon Mist",
            es: "Mistón de dragón",
            it: "Dragon Mist",
            pt: "Névoa de dragão",
          },
          effect: {
            en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la résistance, les poké-powers, les poké-corps ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht von Widerstand, Poké-Powers, Pokékörper oder anderen Auswirkungen auf das verteidigende Pokémon betroffen.",
            es: "El daño de este ataque no se ve afectado por la resistencia, los poké-powers, los cuerpos de los poké o ningún otro efecto en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da resistenza, Poké-Powers, Poké-Bodies o altri effetti sul Pokemon in carica.",
            pt: "Os danos desse ataque não são afetados pela resistência, poké-powers, corpos de poké ou quaisquer outros efeitos no pokemon atual.",
          },
          damage: 70,
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
