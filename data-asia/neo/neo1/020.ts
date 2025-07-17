import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Quilava",
         ja: "キラバ",
         fr: "Quilava",
         de: "Quilava",
         es: "Quilava",
         it: "Quilava",
         pt: "Quilava",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [156],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Smokescreen",
            ja: "煙幕",
            fr: "Écran de fumée",
            de: "Nebelwand",
            es: "Cortina de humo",
            it: "Schermo fumoso",
            pt: "Cortina de fumaça",
          },
          effect: {
            en: "If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
            ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
            fr: "Si le Pokémon en défense essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Wenn das verteidigende Pokemon versucht, während der nächsten Runde Ihres Gegners anzugreifen, dreht Ihr Gegner eine Münze. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Si el Pokémon defensor intenta atacar durante el próximo turno de tu oponente, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada.",
            it: "Se il Pokemon in carica cerca di attaccare durante il prossimo turno del tuo avversario, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla.",
            pt: "Se o pokemon atual tentar atacar durante o próximo turno do seu oponente, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Char",
            ja: "char",
            fr: "Carboniser",
            de: "Verkohlen",
            es: "Carbonizarse",
            it: "CHAR",
            pt: "Char",
          },
          effect: {
            en: "If the Defending Pokemon doesn't have a Char counter on it, flip a coin. If heads, put a Char counter on it. A Char counter requires your opponent to flip a coin after every turn. If tails, put 2 damage counters on the Pokemon with that Char counter. (Char counters stay on the Pokemon as long as it's in play.)",
            ja: "防御ポケモンにチャーカウンターがない場合は、コインをひっくり返します。頭の場合は、チャーカウンターを置きます。チャーカウンターでは、相手がターンするたびにコインをひっくり返す必要があります。尾の場合、そのチャーカウンターでポケモンに2つのダメージカウンターを入れます。 （Char Countersがプレイしている限り、ポケモンにとどまります。）",
            fr: "Si le Pokémon en défense n'a pas de compteur char, retournez une pièce. Si les têtes, mettez un compteur à charbon dessus. Un compteur de charbon oblige votre adversaire à retourner une pièce après chaque tour. Si Tails, mettez 2 compteurs de dégâts sur le Pokémon avec ce compteur char. (Les comptoirs Char restent sur le Pokémon tant qu'il est en jeu.)",
            de: "Wenn das verteidigende Pokémon keinen Char -Closs hat, drehen Sie eine Münze. Wenn Sie Köpfe haben, legen Sie einen Charschumett darauf. Bei einem Char -Counter muss Ihr Gegner nach jeder Runde eine Münze umdrehen. Wenn Schwänze, geben Sie 2 Schadenszähler auf das Pokémon mit diesem Charschum. (Char -Zähler bleiben auf dem Pokemon, solange es im Spiel ist.)",
            es: "Si el Pokémon defensor no tiene un mostrador de carbón, voltea una moneda. Si se dirige, pon un mostrador de char sobre él. Un mostrador de carbón requiere que tu oponente voltee una moneda después de cada turno. Si las colas, coloque 2 contadores de daño en el Pokémon con ese mostrador de carbón. (Los contadores de Char permanecen en el Pokémon siempre que esté en juego).",
            it: "Se il Pokemon in difesa non ha un contatore di carbone, capovolgi una moneta. Se la testa, metti un contatore Char su di esso. Un contatore Char richiede al tuo avversario di lanciare una moneta dopo ogni turno. Se code, metti 2 contatori di danno sul Pokemon con quel contatore. (I contatori di carbone rimangono sul Pokemon fintanto che è in gioco.)",
            pt: "Se o Pokémon atual não tiver um balcão de char, vire uma moeda. Se as cabeças, coloque um balcão de char nele. Um contador de char exige que seu oponente gire uma moeda após cada turno. Se a cauda, coloque 2 balcões de dano no Pokémon com esse contador de char. (Os balcões de char ficam no Pokémon enquanto estiver em jogo.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
