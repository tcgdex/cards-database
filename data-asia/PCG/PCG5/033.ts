import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Regice Star",
         ja: "領土スター",
         fr: "Étoile de régice",
         de: "Regice Star",
         es: "Estrella del regicio",
         it: "Regice Star",
         pt: "Regice Star",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [378],
      hp: 90,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
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
            en: "Prevent all effects of an attack, including damage, done to Regice {{Star|this Pokemon}} by your opponent's Pokemon-ex during your opponent's next turn.",
            ja: "対戦相手の次のターン中に、対戦相手のポケモン-Exによるレジス{{star | this pokemon}}に行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets d'une attaque, y compris les dégâts, faits pour régice {{Star | ce pokemon}} par Pokemon-Ex de votre adversaire pendant le prochain virage de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die in der nächsten Runde Ihres Gegners durch den Pokemon-EX Ihres Gegners durch den Pokemon-EX Ihres Gegners angerichtet wurden.",
            es: "Evite todos los efectos de un ataque, incluido el daño, realizado a Regice {{Star | This Pokemon}} por el Pokémon-EX de tu oponente durante el próximo turno de tu oponente.",
            it: "Prevenire tutti gli effetti di un attacco, incluso il danno, fatto a Regice {{Star | questo Pokemon}} dal Pokemon-Ex del tuo avversario durante il prossimo turno del tuo avversario.",
            pt: "Evite todos os efeitos de um ataque, incluindo danos, causados ao Regice {{Star | this Pokemon}} pelo Pokemon-Ex do seu oponente durante o próximo turno do seu oponente.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Final Blizzard",
            ja: "最終的なブリザード",
            fr: "Blizzard final",
            de: "Final Blizzard",
            es: "Dormenta final",
            it: "Blizzard finale",
            pt: "Blizzard final",
          },
          effect: {
            en: "If your opponent has only 1 Prize card left and Regice {{Star|this Pokemon}} is the only Pokemon you have in play, this attack does 30 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手が1枚の賞品カードを残し、レジス{{star | this pokemon}}が唯一のポケモンである場合、この攻撃は対戦相手のベンチポケモンのそれぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire n'a plus qu'une carte de prix à gauche et Regice {{Star | Ce pokemon}} est le seul pokemon que vous avez en jeu, cette attaque fait 30 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner nur eine Preiskarte hat und Regice {{star | dieses Pokemon}} ist das einzige Pokémon, das Sie im Spiel haben, dauert dieser Angriff 30 Schäden an den Benched -Pokemon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si a tu oponente solo le queda 1 carta de premio y Regice {{Star | Este Pokémon}} es el único Pokémon que tienes en juego, este ataque hace 30 daños a cada Pokémon en banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha solo 1 carta premio rimasta e Regice {{Star | questo Pokemon}} è l'unico Pokemon che hai in gioco, questo attacco fa 30 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver apenas 1 cartão de prêmio e Regice {{Star | Este Pokemon}} é o único Pokémon que você tem em jogo, esse ataque causará 30 danos a cada um dos Pokémon em banco do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
