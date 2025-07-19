import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Golduck (Delta Species)",
         ja: "ゴルダック（デルタ種）",
         fr: "Golduck (espèces delta)",
         de: "Golduck (Delta -Arten)",
         es: "Golduck (especie delta)",
         it: "Golduck (Delta Species)",
         pt: "Golduck (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [55],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Delta Block",
            ja: "デルタブロック",
            fr: "Delta bloc",
            de: "Delta -Block",
            es: "Bloque delta",
            it: "Delta Block",
            pt: "Delta Block",
          },
          effect: {
            en: "As long as any Stadium card with Holon in its name is in play, your opponent can't play any Stadium cards from his or her hand.",
            ja: "ホロンがその名に載っているスタジアムカードがプレイ中である限り、相手は彼または彼女の手からスタジアムカードをプレイすることができません。",
            fr: "Tant que toute carte de stade avec Holon en son nom est en jeu, votre adversaire ne peut pas jouer de cartes de stade de sa main.",
            de: "Solange jede Stadionkarte mit Holon in seinem Namen im Spiel ist, kann Ihr Gegner keine Stadionkarten von seiner Hand spielen.",
            es: "Mientras cualquier carta del estadio con Holon en su nombre esté en juego, tu oponente no puede jugar ninguna carta del estadio de su mano.",
            it: "Finché è in gioco una carta stadio con Holon a suo nome, il tuo avversario non può giocare a carte da stadio dalla sua mano.",
            pt: "Enquanto qualquer carta do estádio com Holon em seu nome estiver em jogo, seu oponente não poderá tocar cartas de estádio da mão.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Mind Play",
            ja: "マインドプレイ",
            fr: "Jeu d'esprit",
            de: "Gedankenspiel",
            es: "Jugar mental",
            it: "Mind Play",
            pt: "Brincadeira mental",
          },
          effect: {
            en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose. If that card is a Trainer card, this attack does 30 damage plus 30 more damage, and discard that card. If that card is not a Trainer card, return it to your opponent's hand.",
            ja: "見ずに相手の手から1枚のカードを1枚選択します。あなたが選んだカードを見てください。そのカードがトレーナーカードの場合、この攻撃は30のダメージに加えて30ダメージを与え、そのカードを破棄します。そのカードがトレーナーカードではない場合は、相手の手に返してください。",
            fr: "Choisissez 1 carte dans la main de votre adversaire sans regarder. Regardez la carte que vous avez choisie. Si cette carte est une carte d'entraînement, cette attaque fait 30 dégâts plus 30 dégâts supplémentaires et jette cette carte. Si cette carte n'est pas une carte d'entraînement, retournez-la à la main de votre adversaire.",
            de: "Wählen Sie 1 Karte aus der Hand Ihres Gegners, ohne zu schauen. Schauen Sie sich die Karte an, die Sie ausgewählt haben. Wenn es sich bei dieser Karte um eine Trainerkarte handelt, verursacht dieser Angriff 30 Schaden zuzüglich 30 weitere Schäden und verwerfen diese Karte. Wenn diese Karte keine Trainerkarte ist, geben Sie sie an die Hand Ihres Gegners zurück.",
            es: "Elija 1 carta de la mano de tu oponente sin mirar. Mira la tarjeta que elegiste. Si esa carta es una carta de entrenador, este ataque hace 30 daños más 30 más de daño y deseche esa carta. Si esa tarjeta no es una tarjeta de entrenador, devuélvala a la mano de tu oponente.",
            it: "Scegli 1 carta dalla mano del tuo avversario senza guardare. Guarda la carta che hai scelto. Se quella carta è una carta dell'allenatore, questo attacco infligge 30 danni più 30 danni e scarta quella carta. Se quella carta non è una carta dell'allenatore, restituila alla mano del tuo avversario.",
            pt: "Escolha 1 cartão da mão do seu oponente sem olhar. Olhe para o cartão que você escolheu. Se esse cartão for um cartão de treinador, esse ataque causará 30 danos mais 30 danos e descarte esse cartão. Se esse cartão não for um cartão de treinador, devolva -o à mão do seu oponente.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
