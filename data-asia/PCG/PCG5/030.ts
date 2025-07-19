import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Clamperl",
         ja: "clamperl",
         fr: "Clamperl",
         de: "Klamperl",
         es: "Afligir",
         it: "Clamperl",
         pt: "Clamperl",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [366],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Iron Defense",
            ja: "鉄の防御",
            fr: "Défense en fer",
            de: "Eisenverteidigung",
            es: "Defensa de hierro",
            it: "Difesa del ferro",
            pt: "Defesa de ferro",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Clamperl during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にClamperlに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, causés à Clamperl lors du prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die während der nächsten Kurve Ihres Gegners geklemmt werden.",
            es: "Voltea una moneda. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, que se hace a Clamperl durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti gli effetti di un attacco, incluso il danno, fatti per corrompere durante il turno successivo dell'avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados a esclarecer durante o próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Clamp Splash",
            ja: "クランプスプラッシュ",
            fr: "Serre-collants",
            de: "Klemmspritzer",
            es: "Chapoteo",
            it: "Splash di morsetto",
            pt: "Splash de grampo",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
