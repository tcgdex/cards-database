import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [441],
	set: Set,

	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'es-es': "Chatot",
		'it-it': "Chatot",
		'pt-br': "Chatot",
		'de-de': "Plaudagei"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "A Cappella",
			'fr-fr': "A Cappella",
			'es-es': "A Capela",
			'it-it': "Canto Corale",
			'pt-br': "A Cappella",
			'de-de': "A cappella"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It mimics the cries of other Pokémon to trick them into thinking it's one of them. This way they won't attack it.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760811,
				tcgplayer: 542902
			}
		},
	],

	illustrator: "Scav",

}

export default card