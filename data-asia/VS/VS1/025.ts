import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Morty's Murkrow",
         ja: "モーティのマークロー",
         fr: "Murkrow de Morty",
         de: "Mortys Murkrow",
         es: "Murkrow de Morty",
         it: "Morty's Murkrow",
         pt: "Morty's Murkrow",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [198],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Entice",
            ja: "誘惑します",
            fr: "Attirer",
            de: "Locken",
            es: "Atraer",
            it: "Attirare",
            pt: "Atrair",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and switch it with the Defending Pokemon. The Defending Pokemon is now Asleep.",
            ja: "対戦相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えます。防御ポケモンは今眠っています。",
            fr: "Si votre adversaire a des pokemon bancés, choisissez-en 1 et changez-le avec le Pokémon en défense. Le Pokémon en défense est maintenant endormi.",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und wechseln Sie es mit dem verteidigenden Pokemon. Das verteidigende Pokemon schläft jetzt.",
            es: "Si tu oponente tiene algún Pokémon de banca, elige 1 de ellos y cambia con el Pokémon defensor. El Pokémon defensor ahora está dormido.",
            it: "Se il tuo avversario ha dei Pokemon in panchina, scegline 1 e cambialo con il Pokemon in difesa. Il Pokemon in carica è ora addormentato.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e mude -o com o Pokémon defensivo. O Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Clutch",
            ja: "クラッチ",
            fr: "Embrayage",
            de: "Kupplung",
            es: "Embrague",
            it: "Frizione",
            pt: "Embreagem",
          },
          effect: {
            en: "The Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
