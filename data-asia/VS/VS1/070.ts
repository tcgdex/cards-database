import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Typhlosion",
         ja: "ブレインの染色",
         fr: "Typhlosion de Blaine",
         de: "Blaines Typhlosion",
         es: "Typhlosion de Blaine",
         it: "La tiflosione di Blaine",
         pt: "Tiflosão de Blaine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [157],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Claw Swipe",
            ja: "爪のスワイプ",
            fr: "Coup de griffe",
            de: "Klaue streift",
            es: "Golpear con garra",
            it: "Claw Swipe",
            pt: "Deslizamento da garra",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Hot Air",
            ja: "熱気",
            fr: "Air chaud",
            de: "Heiße Luft",
            es: "Aire caliente",
            it: "Aria calda",
            pt: "Ar quente",
          },
          effect: {
            en: "Discard 1 Fire Energy card attached to Blaine's Typhlosion. Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any. (Do the damage before switching the Pokemon.)",
            ja: "ブレインの染色物質に取り付けられた1つの消防エネルギーカードを捨てます。対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Jetez 1 carte d'énergie de feu attachée à la typhlosion de Blaine. Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant. (Faites les dégâts avant de changer le pokemon.)",
            de: "1 Brandenergiekarte verwerfen, die an Blaines Typhlosion befestigt ist. Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Descarte 1 tarjeta de energía de fuego unida a la tiflosión de Blaine. Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno. (Haz el daño antes de cambiar el Pokémon).",
            it: "Scartare 1 carta di energia antincendio attaccata alla tiflosione di Blaine. Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Descarte 1 cartão de energia de incêndio anexado à tiflosão de Blaine. Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 30,
        },
      ],

      retreat: 2,

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
