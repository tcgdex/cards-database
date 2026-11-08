import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [572],
	set: Set,

	name: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Cleaning Up",
			'fr-fr': "Ménage",
			'es-es': "Purgar",
			'it-it': "Pulitura",
			'pt-br': "Limpar",
			'de-de': "Putzen"
		},

		effect: {
			'en-us': "Discard up to 2 Pokémon Tools from your opponent's Pokémon.",
			'fr-fr': "Défaussez jusqu'à 2 Outils Pokémon des Pokémon de votre adversaire.",
			'es-es': "Descarta hasta 2 Herramientas Pokémon de los Pokémon de tu rival.",
			'it-it': "Scarta fino a due carte Oggetto Pokémon dai Pokémon del tuo avversario.",
			'pt-br': "Descarte até 2 Ferramentas Pokémon dos Pokémon do seu oponente.",
			'de-de': "Lege bis zu 2 Pokémon-Ausrüstungen von Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760766,
				tcgplayer: 542880
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760766,
				tcgplayer: 542880
			}
		},
	],

	illustrator: "Yuka Morii",

}

export default card