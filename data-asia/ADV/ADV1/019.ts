import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Carvanha",
         ja: "カルバンハ",
         fr: "Carvanha",
         de: "Carvanha",
         es: "Carvanha",
         it: "Carvanha",
         pt: "Carvanha",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [318],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Rough Skin",
            ja: "粗い肌",
            fr: "Peau rugueuse",
            de: "Raue Haut",
            es: "Piel áspera",
            it: "Pelle ruvida",
            pt: "Pele áspera",
          },
          effect: {
            en: "If Carvanha is your Active PokÃ©mon and is damaged by an opponent's attack (even if Carvanha is Knocked Out), put 1 damage counter on the Attacking PokÃ©mon.",
            ja: "Carvanhaがあなたのアクティブなポカモンであり、対戦相手の攻撃によって損傷を受けている場合（カルバンハがノックアウトされたとしても）、攻撃のポカンに1つのダメージカウンターを置きます。",
            fr: "Si Carvanha est votre poké actif et est endommagé par l'attaque d'un adversaire (même si Carvanha est éliminée), mettez 1 compteur de dégâts sur le Pokã © lun.",
            de: "Wenn Carvanha Ihr aktiver Poké Mon Mon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Carvanha ausgeschaltet wird), geben Sie 1 Schadenschalter auf den angreifenden Poké Mon Mon.",
            es: "Si Carvanha es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Carvanha es noqueada), ponga 1 mostrador de daño en el Poké Mon atacante.",
            it: "Se Carvanha è il tuo poké attivo ed è danneggiato dall'attacco di un avversario (anche se Carvanha viene eliminato), metti 1 contatore di danni sul poké mon.",
            pt: "Se Carvanha é o seu Poké de Mon ativo e for danificado pelo ataque de um oponente (mesmo que Carvanha seja nocauteado), coloque 1 contador de danos no Poké de ataque.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Big Bite",
            ja: "大きな一口",
            fr: "Grosse bouchée",
            de: "Großer Biss",
            es: "Gran mordedura",
            it: "Grande morso",
            pt: "Grande mordida",
          },
          effect: {
            en: "The Defending Pokemon can't retreat until the end of your opponent's next turn.",
            ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Das verteidigende Pokémon kann sich erst am Ende der nächsten Runde Ihres Gegners zurückziehen.",
            es: "El Pokémon defensor no puede retirarse hasta el final del próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi fino alla fine del turno successivo del tuo avversario.",
            pt: "O Pokémon atual não pode recuar até o final do próximo turno do seu oponente.",
          },
          damage: 10,
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
