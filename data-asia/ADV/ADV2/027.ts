import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Wobbuffet",
         ja: "ウォブバフェット",
         fr: "Wobbuffet",
         de: "Wobbuffet",
         es: "Wobbuffet",
         it: "Wobbuffet",
         pt: "Wobbuffet",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [202],
      hp: 80,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Safeguard",
            ja: "保護",
            fr: "Sauvegarde",
            de: "Sichern",
            es: "Salvaguardia",
            it: "Salvaguardia",
            pt: "Salvaguarda",
          },
          effect: {
            en: "Prevent all effects of attacks, including damage, done to Wobbuffet by your opponent's Pokémon-ex.",
            ja: "対戦相手のポケモンエクスによるウォブバッフェットに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés à Wobbuffet par Pokémon-EX de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die Wobbuffet durch das Pokémon-ex Ihres Gegners angerichtet haben.",
            es: "Evite todos los efectos de los ataques, incluido el daño, realizado a Wobbuffet por Pokémon-Ex de tu oponente.",
            it: "Prevenire tutti gli effetti degli attacchi, incluso il danno, fatto a Wobbuffet dal Pokémon-Ex del tuo avversario.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados a Wobbuffet pelo Pokémon-Ex do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Flip Over",
            ja: "ひっくり返します",
            fr: "Retourner",
            de: "Umblättern",
            es: "Voltearse",
            it: "Capovolgere",
            pt: "Vire",
          },
          effect: {
            en: "Wobbuffet does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
            ja: "Wobbuffetはそれ自体に10ダメージを与え、この損傷に衰弱と抵抗を適用しないでください。",
            fr: "Wobbuffet se fait 10 dégâts et n'applique pas la faiblesse et la résistance à ces dégâts.",
            de: "Wobbuffet schädigt sich 10 und wendet keine Schwäche und Widerstand gegen diesen Schaden an.",
            es: "Wobbuffet hace 10 daños a sí mismo y no aplica debilidad y resistencia a este daño.",
            it: "Wobbuffet infligge 10 danni a se stesso e non applica debolezza e resistenza a questo danno.",
            pt: "Wobbuffet causa 10 danos a si mesmo e não aplica fraqueza e resistência a esse dano.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

};
