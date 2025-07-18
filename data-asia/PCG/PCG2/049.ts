import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Hariyama ex",
         ja: "Hariyama ex",
         fr: "Hariyama ex",
         de: "Hariyama ex",
         es: "Hariyama ex",
         it: "Hariyama ex",
         pt: "Hariyama ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [297],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Commanding Aura",
            ja: "指揮オーラ",
            fr: "Aura commandant",
            de: "Aura kommandieren",
            es: "Aura dominante",
            it: "Aura comandante",
            pt: "Aura comandante",
          },
          effect: {
            en: "As long as Hariyama ex is your Active PokÃ©mon, your opponent can't play any Stadium cards from his or her hand.",
            ja: "Hariyama Exがあなたのアクティブなポカモンである限り、あなたの対戦相手は彼または彼女の手からスタジアムカードをプレイすることができません。",
            fr: "Tant que Hariyama Ex est votre poké actif, votre adversaire ne peut pas jouer de cartes de stade de sa main.",
            de: "Solange Hariyama Ex Ihr aktiver Poké Mon ist, kann Ihr Gegner keine Stadionkarten von seiner Hand spielen.",
            es: "Mientras Hariyama Ex sea tu Poké Mon activo, tu oponente no puede jugar ninguna carta del estadio de su mano.",
            it: "Finché Hariyama ex è il tuo poké attivo, il tuo avversario non può giocare a carte da stadio dalla sua mano.",
            pt: "Enquanto Hariyama ex for o seu Poké Mon ativo, seu oponente não pode tocar cartas de estádio de sua mão.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Knock Off",
            ja: "ノックオフ",
            fr: "Éliminer",
            de: "Abschlagen",
            es: "Rebajar",
            it: "Staccare",
            pt: "Bata",
          },
          effect: {
            en: "Choose 1 card from your opponent's hand without looking and discard it.",
            ja: "対戦相手の手から1枚のカードを探して廃棄せずに選択してください。",
            fr: "Choisissez 1 carte dans la main de votre adversaire sans la regarder et la jeter.",
            de: "Wählen Sie 1 Karte aus der Hand Ihres Gegners, ohne sie zu schauen, und verwerfen Sie sie.",
            es: "Elija 1 carta de la mano de tu oponente sin mirarla y descartarla.",
            it: "Scegli 1 carta dalla mano del tuo avversario senza guardarlo e scartarla.",
            pt: "Escolha 1 cartão da mão do seu oponente sem olhar e descartar.",
          },
          damage: 40,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Pivot Throw",
            ja: "ピボットスロー",
            fr: "Lancer un pivot",
            de: "Drehwurf",
            es: "Lanzamiento de pivote",
            it: "Tiro per pivot",
            pt: "Arremesso de articulação",
          },
          effect: {
            en: "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中、攻撃によってHariyama Exに与えられた損害は10増加します（脱力感と抵抗を適用する前に）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Hariyama Ex par les attaques est augmenté de 10 (avant d'appliquer la faiblesse et la résistance).",
            de: "Während der nächsten Runde Ihres Gegners wird jeder Schaden, den Hariyama EX durch Angriffe angerichtet hat, um 10 erhöht (bevor sie Schwäche und Widerstand anwenden).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Hariyama EX por ataques aumenta en 10 (antes de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno del tuo avversario, qualsiasi danno arrecato all'Hariyama Ex dagli attacchi viene aumentato di 10 (prima di applicare debolezza e resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado a Hariyama Ex por ataques é aumentado em 10 (antes de aplicar fraqueza e resistência).",
          },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
