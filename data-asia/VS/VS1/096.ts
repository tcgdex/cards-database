import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Suicune",
         ja: "Rocket's Suicune",
         fr: "Suicune de la fusée",
         de: "Rocket's Suicune",
         es: "Suicune de Rocket",
         it: "Rocket's Suicune",
         pt: "Rocket's Suicune",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [245],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Quick Stream",
            ja: "クイックストリーム",
            fr: "Flux rapide",
            de: "Schneller Stream",
            es: "Flujo rápido",
            it: "Flusso rapido",
            pt: "Fluxo rápido",
          },
          effect: {
            en: "Unless you have no Benched Pokemon, flip a coin. If tails, shuffle Rocket's Suicune and all Energy cards attached to it into your deck. (Discard all other cards attached to Rocket's Suicune.)",
            ja: "ベンチ付きポケモンがない限り、コインをひっくり返します。テールの場合、シャッフルロケットのSuicune、およびすべてのエネルギーカードがデッキに取り付けられています。 （Rocket's Suicuneに添付された他のすべてのカードを破棄します。）",
            fr: "Sauf si vous n'avez pas de Pokémon banc, retournez une pièce. Si Tails, Shuffle Rocket's SuiCune et toutes les cartes d'énergie qui y sont attachées dans votre deck. (Jetez toutes les autres cartes attachées à la SUCUNUS de Rocket.)",
            de: "Es sei denn, Sie haben kein Pokémon, drehen Sie eine Münze um. Wenn Schwänze, Shuffle Rockets Suicune und alle daran in Ihr Deck befestigten Energiekarten. (Verwerfen Sie alle anderen Karten an Rockets Suicune.)",
            es: "A menos que no tengas Pokémon en banca, voltea una moneda. SI Tails, baraja el suicón de Rocket y todas las cartas de energía unidas a su mazo. (Deseche todas las demás cartas adjuntas a Rocket's Suicune).",
            it: "A meno che tu non abbia Pokemon in panchina, capovolgi una moneta. Se le code, shuffle Rocket suicune e tutte le carte energetiche attaccate nel tuo mazzo. (Scartare tutte le altre carte collegate al suicune di Rocket.)",
            pt: "A menos que você não tenha Pokemon com bancada, vire uma moeda. Se a cauda, embaralhe o Rocket's Suicune e todas as cartas de energia anexadas a ele no seu baralho. (Descarte todas as outras cartas anexadas ao Rocket's Suicune.)",
          },
          damage: 40,
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
