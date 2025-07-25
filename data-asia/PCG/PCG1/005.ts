import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Kakuna",
         ja: "カクナ",
         fr: "Kakuna",
         de: "Kakuna",
         es: "Kakuna",
         it: "Kakuna",
         pt: "Kakuna",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [14],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

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
            en: "If Kakuna is your Active PokÃ©mon and is damaged by an opponent's attack (even if Kakuna is Knocked Out), the Attacking PokÃ©mon is now Poisoned.",
            ja: "カクナがあなたのアクティブなポカモンであり、相手の攻撃によって損傷を受けている場合（カクナがノックアウトされたとしても）、攻撃するポカモンは現在毒されています。",
            fr: "Si Kakuna est votre poké actif et est endommagé par l'attaque d'un adversaire (même si Kakuna est éliminée), le poké attaquant est maintenant empoisonné.",
            de: "Wenn Kakuna Ihr aktives Poké Mon Mon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Kakuna ausgeschaltet wird), ist der angreifende Poké Mon Montag vergiftet.",
            es: "Si Kakuna es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Kakuna es noqueada), el Poké Mon atacante ahora está envenenado.",
            it: "Se Kakuna è il tuo poké attivo ed è danneggiato dall'attacco di un avversario (anche se Kakuna viene eliminata), l'attacco di Poké Mon è ora avvelenato.",
            pt: "Se Kakuna é o seu Poké Mon ativo e é danificado pelo ataque de um oponente (mesmo que Kakuna seja nocauteado), o Poké de ataque é agora envenenado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 10,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
