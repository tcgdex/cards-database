import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Tangela",
         ja: "タンゲラ",
         fr: "Tangela",
         de: "TANGELA",
         es: "Tangela",
         it: "TANGELA",
         pt: "Tangela",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [114],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Vine Tease",
            ja: "つるのいじめ",
            fr: "Taquiner de la vigne",
            de: "Weinrebe",
            es: "Vine Teating",
            it: "Vine prese in giro",
            pt: "Tease de videira",
          },
          effect: {
            en: "Look at your Prize cards without showing your opponent. Choose 1 of the Prize cards and switch it with the top card of your deck without looking at the top card of your deck. If you have no cards in your deck, this attack does nothing.",
            ja: "相手に見せずに賞品を見てください。賞品の1枚を選択し、デッキの一番上のカードを見ずにデッキの一番上のカードで切り替えます。デッキにカードがない場合、この攻撃は何もしません。",
            fr: "Regardez vos cartes de prix sans montrer à votre adversaire. Choisissez 1 des cartes de prix et changez-la avec la carte supérieure de votre deck sans regarder la carte supérieure de votre deck. Si vous n'avez pas de cartes dans votre deck, cette attaque ne fait rien.",
            de: "Schauen Sie sich Ihre Preiskarten an, ohne Ihren Gegner zu zeigen. Wählen Sie 1 der Preiskarten und wechseln Sie sie mit der oberen Karte Ihres Decks, ohne die obere Karte Ihres Decks zu betrachten. Wenn Sie keine Karten in Ihrem Deck haben, tut dieser Angriff nichts.",
            es: "Mira tus tarjetas de premio sin mostrar a tu oponente. Elija 1 de las cartas de premio y cambie con la carta superior de su mazo sin mirar la carta superior de su mazo. Si no tienes cartas en tu mazo, este ataque no hace nada.",
            it: "Guarda le tue carte premio senza mostrare il tuo avversario. Scegli 1 delle carte premio e cambialo con la carta superiore del tuo mazzo senza guardare la carta superiore del tuo mazzo. Se non hai carte nel tuo mazzo, questo attacco non fa nulla.",
            pt: "Veja seus cartões de prêmios sem mostrar seu oponente. Escolha 1 das cartas de prêmios e trocam -as com a carta superior do seu baralho sem olhar para a carta superior do seu baralho. Se você não tem cartas no seu baralho, esse ataque não fará nada.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Wiggle",
            ja: "小刻み",
            fr: "Remuer",
            de: "Wackeln",
            es: "Menear",
            it: "Oscillare",
            pt: "Mexer",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused. If tails, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンは現在毒されます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus. Si la queue, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt. Wenn Schwänze, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido. Si Tails, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso. Se le code, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso. Se o cauda, o pokemon defensor agora está envenenado.",
          },
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
