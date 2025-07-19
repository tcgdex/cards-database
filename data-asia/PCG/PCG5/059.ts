import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Regirock Star",
         ja: "レジロックスター",
         fr: "Star de Regirock",
         de: "Regirock Star",
         es: "Estrella del regirock",
         it: "Regirock Star",
         pt: "Regirock Star",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [377],
      hp: 90,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Dig Drain",
            ja: "排水を掘ります",
            fr: "Drainer",
            de: "Abfluss graben",
            es: "Desagüe",
            it: "SCAR DROVE",
            pt: "Escavar o dreno",
          },
          effect: {
            en: "Remove 1 damage counter from Regirock {{Star|this Pokemon}}.",
            ja: "Regirock {{star | this Pokemon}}から1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de Regirock {{Star | Ce pokemon}}.",
            de: "Entfernen Sie 1 Schadenschalter von Regirock {{Stern | Dieses Pokemon}}.",
            es: "Retire 1 contador de daño de Regirock {{Star | This Pokemon}}.",
            it: "Rimuovi 1 contatore di danni da Regirock {{Star | questo Pokemon}}.",
            pt: "Remova 1 contador de danos do regirock {{Star | this Pokemon}}.",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Final Blast",
            ja: "最終的な爆発",
            fr: "Final Blast",
            de: "Letzte Explosion",
            es: "Explosión final",
            it: "Esplosione finale",
            pt: "Explosão final",
          },
          effect: {
            en: "If your opponent has only 1 Prize card left and Regirock {{Star|this Pokemon}} is the only Pokemon you have in play, this attack's base damage is 100 instead of 30.",
            ja: "対戦相手が1枚の賞カードのみを残し、Regirock {{star | this pokemon}}が唯一のポケモンである場合、この攻撃のベースダメージは30ではなく100です。",
            fr: "Si votre adversaire n'a plus qu'une carte de prix à gauche et Regirock {{Star | Ce pokemon}} est le seul pokemon que vous avez en jeu, les dégâts de base de cette attaque sont de 100 au lieu de 30.",
            de: "Wenn Ihr Gegner nur 1 Preiskarte übrig hat und Regirock {{star | dieses Pokemon}} ist das einzige Pokemon, das Sie im Spiel haben, ist der Grundschaden dieses Angriffs 100 statt 30.",
            es: "Si a tu oponente solo le queda 1 carta de premio y Regirock {{Star | este Pokemon}} es el único Pokémon que tienes en juego, el daño base de este ataque es 100 en lugar de 30.",
            it: "Se il tuo avversario ha solo 1 carta premio e regirock {{star | questo Pokemon}} è l'unico Pokemon che hai in gioco, il danno base di questo attacco è 100 anziché 30.",
            pt: "Se o seu oponente tiver apenas 1 cartão de prêmio e Regirock {{Star | este Pokemon}} é o único Pokemon que você tem em jogo, o dano básico desse ataque é 100 em vez de 30.",
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
