import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'de-de': "Dialga"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Common",
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
				'fr-fr': "Vous pouvez reprendre dans votre main toutes les cartes Énergies attachées à Dialga. Retirez alors au Pokémon Défenseur la carte Évolution au niveau le plus élevé et mélangez-là au deck de votre adversaire.",
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
		'fr-fr': "Il peut contrôler le temps. Les mythes de Sinnoh en parlent comme d'une divinité ancienne."
	},

	variants: [
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "holo",
			size: "jumbo",
			foil: "cracked-ice"
		},
		{
			type: "holo",
			size: "jumbo",
			foil: "mirror"
		}
	],
}

export default card
