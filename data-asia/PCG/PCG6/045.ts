import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Hypno",
         ja: "催眠",
         fr: "Hypno",
         de: "Hypno",
         es: "Hipno",
         it: "Ipno",
         pt: "Hypno",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [97],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Binding Aura",
            ja: "結合オーラ",
            fr: "Aura de liaison",
            de: "Bindende Aura",
            es: "Aura aturdida",
            it: "Aura vincolante",
            pt: "Aura de ligação",
          },
          effect: {
            en: "Your opponent can't play any Basic PokÃ©mon or Evolution cards from his or her hand to evolve an Asleep PokÃ©mon and can't attach any Energy cards from his or her hand to an Asleep PokÃ©mon.",
            ja: "対戦相手は、眠っているポカンを進化させるために、手から基本的なポカモンまたはエボリューションカードをプレイすることができず、手からエネルギーカードを眠っているポケモンに取り付けることはできません。",
            fr: "Votre adversaire ne peut pas jouer de cartes de base de Pokén ou d'évolution de sa main pour faire évoluer un poké endormi et ne peut attacher aucune carte d'énergie de sa main à un poké endormi.",
            de: "Ihr Gegner kann keine grundlegenden Pokémon- oder Evolutionskarten von seiner Hand spielen, um einen schlafenden Poké Mon zu entwickeln, und kann keine Energiekarten von seiner Hand an einen schlafenden Poké © Mon anbringen.",
            es: "Tu oponente no puede jugar ninguna carta básica de Poké Mon o evolución de su mano para evolucionar un Poké Mon dormido y no puede adjuntar ninguna carta de energía de su mano a un Poké dormido.",
            it: "Il tuo avversario non può giocare alcuna poké di base o carte evolutiva dalla sua mano per evolvere un poké addormentato e non può attaccare alcuna scheda di energia dalla mano a un poké mon.",
            pt: "Seu oponente não pode tocar nenhum Poké Mon ou Cartões de Evolução de sua mão para evoluir um Poké de dormemo e não pode anexar nenhum cartão de energia da mão a um Poké de Mon.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sleep Inducer",
            ja: "スリープインデューサー",
            fr: "Inducteur du sommeil",
            de: "Schlafinduktor",
            es: "Inductor de sueño",
            it: "Induttore del sonno",
            pt: "Indutor do sono",
          },
          effect: {
            en: "Switch 1 of your opponent's Benched Pokemon with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch. The new Defending Pokemon is now Asleep.",
            ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。新しい防御ポケモンは今眠っています。",
            fr: "Communiquez 1 des Pokémon bancés de votre adversaire avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer. Le nouveau Pokémon défendant est maintenant endormi.",
            de: "Wechseln Sie 1 des Pokémon Ihres Gegners mit einem der verteidigenden Pokémon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln. Das neue verteidigende Pokemon schläft jetzt.",
            es: "Cambie 1 del Pokémon de banca de tu oponente con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar. El nuevo Pokémon defensor ahora está dormido.",
            it: "Switch 1 del Pokemon in panchina del tuo avversario con 1 del Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare. Il nuovo Pokemon in carica è ora addormentato.",
            pt: "Switch 1 do Pokémon bancado do seu oponente com 1 do Pokémon atual. Seu oponente escolhe o pokemon defensor para mudar. O novo Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Psyshot",
            ja: "PSYSHOT",
            fr: "Psychot",
            de: "Psyshot",
            es: "Psíquico",
            it: "Psyshot",
            pt: "Psyshot",
          },
          damage: 40,
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
