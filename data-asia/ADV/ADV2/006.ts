import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Cacnea",
         ja: "カクネア",
         fr: "Cacnée",
         de: "Kaknoe",
         es: "Cacnea",
         it: "Cacnea",
         pt: "Cacnea",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [331],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Poison Payback",
            ja: "ポイズンの見返り",
            fr: "Retour sur poison",
            de: "Giftrückzahlung",
            es: "Reverencia de veneno",
            it: "Rimborso veleno",
            pt: "Payback de veneno",
          },
          effect: {
            en: "If Cacnea is your Active PokÃ©mon and is damaged by an opponent's attack (even if Cacnea is Knocked Out), the Attacking PokÃ©mon is now Poisoned.",
            ja: "カクネアがあなたの活動的なポケモンであり、相手の攻撃によって損傷を受けている場合（カクネアがノックアウトされたとしても）、攻撃するポカモンは現在毒されます。",
            fr: "Si la cacnée est votre poké active et est endommagée par l'attaque d'un adversaire (même si la cacnée est éliminée), le poké attaquant est maintenant empoisonné.",
            de: "Wenn Kaknoe Ihr aktiver Poké Mon Mon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Kaknoe ausgeschlagen wird), ist der angreifende Poké Mon Montag vergiftet.",
            es: "Si Cacnea es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Cacnea es noqueada), el Poké Mon atacante ahora está envenenado.",
            it: "Se la cacnea è il tuo poké attivo ed è danneggiato dall'attacco di un avversario (anche se la cacnea viene eliminata), il poké -luneding attaccante è ora avvelenato.",
            pt: "Se a cacnea é o seu Poké Mon ativo e é danificado pelo ataque de um oponente (mesmo que a cacnea seja nocauteada), o Poké -Mon atacante está agora envenenado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Light Punch",
            ja: "軽いパンチ",
            fr: "Coup de poing",
            de: "Leichter Schlag",
            es: "Ligero",
            it: "Punch leggero",
            pt: "Punchado leve",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
