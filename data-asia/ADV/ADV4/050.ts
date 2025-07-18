import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Machoke",
         ja: "マチョーク",
         fr: "Machoke",
         de: "Machoke",
         es: "Machoke",
         it: "Machoke",
         pt: "Machoke",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [67],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Strikes Back",
            ja: "ストライクバック",
            fr: "Frappe en arrière",
            de: "Schlägt zurück",
            es: "Retroceso",
            it: "Colpisce indietro",
            pt: "Volta de volta",
          },
          effect: {
            en: "If Machoke is your Active PokÃ©mon and is damaged by an opponent's attack (even if Machoke is Knocked Out), put 1 damage counter on the Attacking PokÃ©mon.",
            ja: "マチョークがあなたのアクティブなポケモンであり、相手の攻撃によって損傷を受けている場合（マチョークがノックアウトされたとしても）、攻撃するポカンに1つのダメージカウンターを置きます。",
            fr: "Si Machoke est votre poké actif et est endommagé par l'attaque d'un adversaire (même si Machoke est éliminé), mettez 1 compteur de dégâts sur le poké attaquant.",
            de: "Wenn Machoke Ihr aktiver Pokémon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Machoke ausgeschaltet wird), legen Sie 1 Schadenschalter auf den angreifenden Poké mon.",
            es: "Si Machoke es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Machoke es noqueado), ponga 1 contador de daño en el Poké Mon atacante.",
            it: "Se Machoke è il tuo poké attivo ed è danneggiato dall'attacco di un avversario (anche se Machoke viene eliminato), metti 1 contatore di danni sul poké mon.",
            pt: "Se o Machoke é o seu Poké de Mon ativo e for danificado pelo ataque de um oponente (mesmo que o Machoke seja nocauteado), coloque 1 contador de danos no Poké de ataque.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Low Kick",
            ja: "ローキック",
            fr: "Coup de pied bas",
            de: "Niedriger Kick",
            es: "Patada baja",
            it: "Calcio basso",
            pt: "Kick baixo",
          },
          damage: 30,
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
