import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Horsea",
         ja: "馬",
         fr: "Hors-mer",
         de: "Horsesee",
         es: "Horsea",
         it: "Horsea",
         pt: "Horsea",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [116],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Retaliate",
            ja: "報復",
            fr: "User de représailles",
            de: "Revanchieren",
            es: "Tomar represalias",
            it: "Vendicarsi",
            pt: "Retaliar",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on Horsea.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10倍のダメージ倍のダメージ数を馬にカウンターします。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts de temps le nombre de compteurs de dégâts sur Horsea.",
            de: "Eine Münze drehen. Wenn dieser Angriff auf Köpfe ist, schädigt dieser Angriff die Anzahl der Schadensschaden gegen den Vorsatz.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 veces el número de contadores de daño en Horsea.",
            it: "Capovolgi una moneta. Se la testa, questo attacco fa 10 danni volte il numero di contatori di danno su Horsea.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos às vezes o número de contadores de danos em Horsea.",
          },
        },
        {
          cost: ["Water"],
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
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
