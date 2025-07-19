import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Ludicolo (Delta Species)",
         ja: "ルディコロ（デルタ種）",
         fr: "Ludicolo (espèces delta)",
         de: "Ludicolo (Delta -Arten)",
         es: "Ludicolo (especie delta)",
         it: "Ludicolo (Delta Species)",
         pt: "Ludicolo (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [272],
      hp: 100,
      types: ["Fire"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Overzealous",
            ja: "熱心",
            fr: "Trop zélé",
            de: "Übereifrig",
            es: "Demasiado entusiasta",
            it: "Troppo zelante",
            pt: "Superzeal",
          },
          effect: {
            en: "If your opponent has any PokÃ©mon-ex in play, each of Ludicolo's attacks does 30 more damage to the Defending PokÃ©mon.",
            ja: "対戦相手がPokã©Mon-Exをプレイしている場合、Ludicoloのそれぞれの攻撃は、Pokã©Monに30件のダメージを与えます。",
            fr: "Si votre adversaire a un jeu de jeu en jeu, chacune des attaques de Ludicolo inflige 30 dégâts supplémentaires aux Poké en défense.",
            de: "Wenn Ihr Gegner einen Poké-Mon-EX im Spiel hat, verursacht jeder Angriffe von Ludicolo 30 weitere Schäden an dem verteidigenden Poké Mon.",
            es: "Si tu oponente tiene algún Poké Mon-Ex en juego, cada uno de los ataques de Ludicolo hace 30 daños más al Poké Mon.",
            it: "Se il tuo avversario ha qualche poké mon-ex in gioco, ciascuno degli attacchi di Ludicolo fa altri 30 danni al difensore Poké mon.",
            pt: "Se o seu oponente tiver algum Poké Mon-Ex em jogo, cada um dos ataques de Ludicolo causar mais 30 danos ao defesa do Poké Mon.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
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
          damage: 30,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Fire Punch",
            ja: "ファイアパンチ",
            fr: "Coup de feu",
            de: "Feuerstempel",
            es: "Golpe de fuego",
            it: "Fuoco Punch",
            pt: "Punch de fogo",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
