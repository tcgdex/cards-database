import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Groudon ex",
	},
	illustrator: "Kazuo Yazawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 120,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Major Earthquake",
			},
			effect: {
				'en-us': "Discard a Fighting Energy card attached to Groudon ex. Does 10 damage to your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85928
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				tcgplayer: 85928
			}
		},
		{
			type: 'normal',
			subtype: 'no-e-reader'
		}
	]
}

export default card
