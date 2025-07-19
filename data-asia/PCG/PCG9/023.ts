import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Latios ex (Delta Species)",
         ja: "Latios Ex（デルタ種）",
         fr: "Latios Ex (espèces delta)",
         de: "Latios ex (Delta -Arten)",
         es: "Latios ex (especie delta)",
         it: "Latios ex (Delta Species)",
         pt: "LATIOS EX (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [381],
      hp: 100,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Link Wing",
            ja: "リンクウィング",
            fr: "Aile de liaison",
            de: "Linkflügel",
            es: "Ala de enlace",
            it: "Ala di collegamento",
            pt: "Asa de ligação",
          },
          effect: {
            en: "The Retreat Cost for each of your Latias, Latias ex, Latios, and Latios ex is 0.",
            ja: "あなたのラティアス、ラティアスEX、ラティオス、およびラティオスEXのそれぞれのリトリートコストは0です。",
            fr: "Le coût de retraite pour chacun de vos Latias, Latias Ex, Latios et Latios Ex est 0.",
            de: "Die Rückzugskosten für jeden Ihrer Latias, Latias Ex, Latios und Latios EX beträgt 0.",
            es: "El costo de retiro para cada uno de sus latias, latias ex, latios y latios ex es 0.",
            it: "Il costo di ritiro per ciascuna delle tue latia, Latias Ex, Latios e Latios Ex è 0.",
            pt: "O custo do retiro para cada um de seus latias, latias ex, latios e latios ex é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Ice Barrier",
            ja: "アイスバリア",
            fr: "Barrière de glace",
            de: "Eisbarriere",
            es: "Barrera de hielo",
            it: "Barriera al ghiaccio",
            pt: "Barreira de gelo",
          },
          effect: {
            en: "Prevent all effects of an attack, including damage, done to Latios ex by your opponent's Pokemon-ex during your opponent's next turn.",
            ja: "対戦相手の次のターン中に、対戦相手のポケモンエクスがラティオスExに与えたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets d'une attaque, y compris les dégâts, faits à Latios Ex par le Pokemon-EX de votre adversaire pendant le prochain tour de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die Latios EX durch den Pokemon-EX Ihres Gegners in der nächsten Runde Ihres Gegners angerichtet haben.",
            es: "Evite todos los efectos de un ataque, incluido el daño, hecho a Latios EX por el Pokemon-Ex de tu oponente durante el próximo turno de tu oponente.",
            it: "Prevenire tutti gli effetti di un attacco, incluso il danno, fatto a Latios Ex dal Pokemon-Ex del tuo avversario durante il prossimo turno del tuo avversario.",
            pt: "Evite todos os efeitos de um ataque, incluindo danos, causados ao Latios EX pelo Pokemon-Ex do seu oponente durante o próximo turno do seu oponente.",
          },
          damage: 30,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Hydro Splash",
            ja: "ハイドロスプラッシュ",
            fr: "Hydro Splash",
            de: "Hydro Splash",
            es: "Chapoteo hidráulico",
            it: "Hydro Splash",
            pt: "Splash Hydro",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
