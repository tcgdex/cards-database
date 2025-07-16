import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Ninetales",
         ja: "ニネタール",
         fr: "Ninetales",
         de: "Ninetales",
         es: "Ninetales",
         it: "Ninetales",
         pt: "Ninetales",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [38],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Lure",
            ja: "ルアー",
            fr: "Leurre",
            de: "Locken",
            es: "Señuelo",
            it: "Attira",
            pt: "Atrair",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and switch it with the Defending Pokemon.",
            ja: "対戦相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えます。",
            fr: "Si votre adversaire a des pokemon bancés, choisissez-en 1 et changez-le avec le Pokémon en défense.",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und wechseln Sie es mit dem verteidigenden Pokemon.",
            es: "Si tu oponente tiene algún Pokémon de banca, elige 1 de ellos y cambia con el Pokémon defensor.",
            it: "Se il tuo avversario ha dei Pokemon in panchina, scegline 1 e cambialo con il Pokemon in difesa.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e mude -o com o Pokémon defensivo.",
          },
          damage: None,
        },
        {
          cost: ["Fire", "Fire", "Fire", "Fire"],
          name: {
            en: "Fire Blast",
            ja: "火の爆発",
            fr: "Explosion de feu",
            de: "Feuerexplosion",
            es: "Explosión de fuego",
            it: "Fire Blast",
            pt: "Explosão de fogo",
          },
          effect: {
            en: "Discard 1 Fire Energy card attached to Ninetales or this attack does nothing.",
            ja: "Ninetalesに取り付けられた1つの消防エネルギーカードを廃棄するか、この攻撃は何もしません。",
            fr: "Jetez 1 carte d'énergie de feu attachée à Ninetales ou cette attaque ne fait rien.",
            de: "LOW 1 Fire Energy Card, die an Ninetales angebracht ist, oder dieser Angriff tut nichts.",
            es: "Deseche 1 tarjeta de energía de fuego unida a Ninetales o este ataque no hace nada.",
            it: "Scartare 1 carta di energia antincendio attaccata a Ninetales o questo attacco non fa nulla.",
            pt: "Descarte 1 cartão de energia de incêndio anexado a Ninetales ou este ataque não faz nada.",
          },
          damage: 80,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          subtype: "shadowless",
        },
        {
          type: "holo",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
