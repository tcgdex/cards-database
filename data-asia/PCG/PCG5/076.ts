import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Registeel Star",
         ja: "Registeel Star",
         fr: "Star de régisteel",
         de: "Registeel Star",
         es: "Estrella de registeel",
         it: "Registeel Star",
         pt: "Registel Star",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [379],
      hp: 90,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Metal"],
          name: {
            en: "Barrier Attack",
            ja: "バリア攻撃",
            fr: "Attaque de barrière",
            de: "Barriereangriff",
            es: "Ataque de barrera",
            it: "Attacco barriera",
            pt: "Ataque de barreira",
          },
          effect: {
            en: "During your opponent's next turn, any damage done to Registeel {{Star|this Pokemon}} by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中に、攻撃によるRegisteEel {{star | this Pokemon}}に与えられた損害は10（脱力感と抵抗を適用した後）に減少します。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Registeel {{Star | Ce pokemon}} par les attaques est réduit de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Während der nächsten Runde Ihres Gegners wird jeder Schaden an Registeel {{stern | this pokemon}} durch Angriffe um 10 reduziert (nachdem Schwäche und Widerstand angewendet werden).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Registeel {{Star | Este Pokémon}} por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno del tuo avversario, qualsiasi danno arrecato a Registeel {{Star | questo Pokemon}} dagli attacchi è ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado ao Registel {{Star | this Pokemon}} pelos ataques é reduzido em 10 (depois de aplicar fraqueza e resistência).",
          },
          damage: 10,
        },
        {
          cost: ["Metal", "Metal", "Colorless"],
          name: {
            en: "Final Laser",
            ja: "最終レーザー",
            fr: "Laser final",
            de: "Final Laser",
            es: "Láser final",
            it: "Laser finale",
            pt: "Laser final",
          },
          effect: {
            en: "Put 3 damage counters on your opponent's Pokemon in any way you like. If your opponent has only 1 Prize card left and Registeel {{Star|this Pokemon}} is the only Pokemon you have in play, put 6 damage counters instead.",
            ja: "相手のポケモンに3つのダメージカウンターを、好きなように配置します。対戦相手が1枚の賞カードのみを残し、Registeel {{star | this pokemon}}があなたがプレイしている唯一のポケモンである場合、代わりに6つのダメージカウンターを入れます。",
            fr: "Mettez 3 compteurs de dégâts sur le pokemon de votre adversaire de quelque manière que ce soit. Si votre adversaire n'a plus qu'une carte de prix à gauche et Registeel {{Star | Ce pokemon}} est le seul pokemon que vous avez en jeu, mettez 6 compteurs de dégâts à la place.",
            de: "Legen Sie 3 Schadenszähler auf das Pokémon Ihres Gegners auf jede mögliche Weise. Wenn Ihr Gegner nur eine Preiskarte hat und Registeel {{star | dieses Pokemon}} ist das einzige Pokemon, das Sie im Spiel haben, geben Sie stattdessen 6 Schadenszähler.",
            es: "Pon 3 contadores de daño en el Pokémon de tu oponente de la manera que quieras. Si a tu oponente le queda solo 1 tarjeta de premio y Registeel {{Star | este Pokemon}} es el único Pokémon que tienes en juego, ponte 6 contadores de daño.",
            it: "Metti 3 contatori di danno sul Pokemon del tuo avversario in ogni modo che desideri. Se il tuo avversario ha solo 1 carta a premi e Registeel {{Star | questo Pokemon}} è l'unico Pokemon che hai in gioco, metti invece 6 contatori di danno.",
            pt: "Coloque 3 contadores de dano no Pokémon do seu oponente da maneira que quiser. Se o seu oponente tiver apenas 1 cartão de prêmio e Registel {{Star | this Pokemon}} é o único Pokemon que você tem em jogo, coloque 6 contadores de danos.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
