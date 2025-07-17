import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Croconaw",
         ja: "暗いワニ",
         fr: "Croconaw sombre",
         de: "Dunkler Kroconaw",
         es: "Croconaw oscuro",
         it: "Dark Croconaw",
         pt: "Croconaw escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [159],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Clamping Jaw",
            ja: "顎のクランプ",
            fr: "Serrer la mâchoire",
            de: "Kiefer klemmen",
            es: "Prostituta",
            it: "Serraggio della mascella",
            pt: "Mandíbula de aperto",
          },
          effect: {
            en: "The Defending Pokemon can't retreat during your opponent's next turn. If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing. (Benching either Pokemon ends this effect.)",
            ja: "防御するポケモンは、相手の次のターン中に退却することはできません。防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
            fr: "Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire. Si le Pokémon en défense essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait rien. (Benching soit Pokémon termine cet effet.)",
            de: "Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen. Wenn das verteidigende Pokemon versucht, während der nächsten Runde Ihres Gegners anzugreifen, dreht Ihr Gegner eine Münze. Wenn Schwänze, tut dieser Angriff nichts. (BENCHING BEEDE POKEON ENDEN diesen Effekt.)",
            es: "El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente. Si el Pokémon defensor intenta atacar durante el próximo turno de tu oponente, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada. (Benching O Pokemon termina este efecto).",
            it: "Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario. Se il Pokemon in carica cerca di attaccare durante il prossimo turno del tuo avversario, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla. (Benching uno dei pokemon termina questo effetto.)",
            pt: "O Pokémon atual não pode recuar durante o próximo turno do seu oponente. Se o pokemon atual tentar atacar durante o próximo turno do seu oponente, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada. (Becada de Pokemon termina esse efeito.)",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
