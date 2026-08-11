import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'de-de': "Dialga"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Time Bellow",
				'fr-fr': "Appel temporel",
				'de-de': "Zeitschrei"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Flash Cannon",
				'fr-fr': "Luminocanon",
				'de-de': "Lichtkanone"
			},
			effect: {
				'en-us': "You may return all Energy cards attached to Dialga to your hand. If you do, remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
				'fr-fr': "Vous pouvez reprendre dans votre main toutes les cartes Énergie attachées à Dialga. Retirez alors au Pokémon Défenseur la carte au niveau d'Évolution le plus élevé et mélangez-la au deck de votre adversaire.",
				'de-de': "Du kannst alle an Dialga angelegten Energiekarten zurück auf deine Hand nehmen. Wenn du das machst, entferne die höchste Evolutionskarte vom Verteidigenden Pokémon. Dein Gegner mischt diese Karte in sein Deck."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
	},

	thirdParty: {
		cardmarket: 277918,
		tcgplayer: 84799
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["platinum"]
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	]
}

export default card
