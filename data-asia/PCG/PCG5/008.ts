import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Wurmple",
         ja: "Wurmple",
         fr: "Wurmple",
         de: "Wurmlich",
         es: "Wurmple",
         it: "Wurmple",
         pt: "Wurmple",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [265],
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
            en: "If Wurmple is your Active PokÃ©mon and is damaged by an opponent's attack (even if Wurmple is Knocked Out), the Attacking PokÃ©mon is now Poisoned.",
            ja: "Wurmpleがあなたのアクティブなポカモンであり、対戦相手の攻撃によって損傷を受けた場合（Wurmpleがノックアウトされたとしても）、攻撃するPokã©Monは現在毒されています。",
            fr: "Si Wurmple est votre poké actif et est endommagé par l'attaque d'un adversaire (même si Wurmple est éliminé), le Poké attaquant est maintenant empoisonné.",
            de: "Wenn Wurmple Ihr aktiver Poké Mon Mon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Wurmmple ausgeschaltet wird), wird der angreifende Poké Mon Montag vergiftet.",
            es: "Si Wurmple es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Wurmple es noqueado), el Poké Mon atacante ahora está envenenado.",
            it: "Se Wurmple è il tuo poké attivo ed è danneggiato dall'attacco di un avversario (anche se Wurmple viene eliminato), il poké -luneding attaccante è ora avvelenato.",
            pt: "Se Wurmple é o seu Poké Mon ativo e é danificado pelo ataque de um oponente (mesmo que Wurmple seja nocauteado), o Poké de ataque é agora envenenado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "String Pull",
            ja: "文字列プル",
            fr: "Traction des cordes",
            de: "String ziehen",
            es: "Tirón",
            it: "Stringa tiro",
            pt: "Pull string",
          },
          effect: {
            en: "Switch 1 of your opponent's Benched Pokemon with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch.",
            ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Communiquez 1 des Pokémon bancés de votre adversaire avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Wechseln Sie 1 des Pokémon Ihres Gegners mit einem der verteidigenden Pokémon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Cambie 1 del Pokémon de banca de tu oponente con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Switch 1 del Pokemon in panchina del tuo avversario con 1 del Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Switch 1 do Pokémon bancado do seu oponente com 1 do Pokémon atual. Seu oponente escolhe o pokemon defensor para mudar.",
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
