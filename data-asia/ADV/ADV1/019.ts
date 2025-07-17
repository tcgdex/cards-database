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
            en: "If Carvanha is your Active Pokémon and is damaged by an opponent's attack <em>(even if Carvanha is Knocked Out)</em>, put 1 damage counter on the Attacking Pokémon.",
            ja: "Carvanhaがあなたのアクティブなポケモンであり、相手の攻撃<em>（たとえCarvanhaがノックアウトされたとしても）によって損傷している場合は、攻撃ポケモンに1ダメージカウンターを置きます。",
            fr: "Si Carvanha est votre Pokémon actif et est endommagé par l'attaque d'un adversaire <em> (même si Carvanha est éliminée) </em>, mettez 1 compteur de dégâts sur le Pokémon attaquant.",
            de: "Wenn Carvanha Ihr aktives Pokémon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Carvanha ausgeschaltet wird) </em>, geben Sie dem angreifenden Pokémon 1 Schadenschalter.",
            es: "Si Carvanha es tu Pokémon activo y está dañado por el ataque de un oponente <em> (incluso si Carvanha es noqueado) </em>, ponga 1 mostrador de daño en el Pokémon atacante.",
            it: "Se Carvanha è il tuo Pokémon attivo ed è danneggiato dall'attacco di un avversario <em> (anche se Carvanha viene eliminato) </em>, metti 1 contatore di danni sul Pokémon attaccante.",
            pt: "Se Carvanha é o seu Pokémon ativo e é danificado pelo ataque de um oponente <em> (mesmo que Carvanha seja nocauteado) </em>, coloque 1 contador de danos no Pokémon atacante.",
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
