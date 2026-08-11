import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'de-de': "Gallopa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [78],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agility"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Rapidash.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Galopa.",
				'de-de': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Rapidash."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gallop",
				'fr-fr': "Galop",
				'de-de': "Gallop"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard a Fire Energy card attached to Rapidash and this attack does 30 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez-vous d'une carte Énergie  attachée à Galopa et cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, discard a  Energy card attached to Rapidash and this attack does 30 damage plus 20 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88577,
				cardmarket: 275103
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88577,
				cardmarket: 275103
			}
		},
	],
	retreat: 0
}

export default card
