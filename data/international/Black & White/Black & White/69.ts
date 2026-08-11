import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'es-es': "Scrafty",
		'it-it': "Scrafty",
		'pt-br': "Scrafty",
		'de-de': "Irokex"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Spit Acid",
				'fr-fr': "Crachat d’Acide",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned. Flip a coin. If heads, the Defending Pokémon is also Paralyzed.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé. Lancez une pièce. Si c’est face, le Pokémon Défenseur est aussi Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied Voltige",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Groups of them beat up anything that enters their territory. Each can spit acidic liquid from its mouth.",
	},

	thirdParty: {
		cardmarket: 279807,
		tcgplayer: 88977
	}
}

export default card
