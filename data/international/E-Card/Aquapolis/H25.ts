import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'de-de': "Suicune"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [245],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Pure Body",
				'fr-fr': "Corps pur",
				'de-de': "Pure Body"
			},
			effect: {
				'en-us': "To attach a Water Energy card from your hand to Suicune, you must discard an Energy card attached to Suicune. (Attach the Water Energy, and then discard an Energy card from Suicune.)",
				'fr-fr': "Pour attacher une carte Énergie  de votre main à Suicune, vous devez vous défausser d'une carte Énergie attachée à Suicune. (Attachez l'Énergie , et défaussez-vous ensuite d'une carte Énergie attachée à Suicune.)",
				'de-de': "To attach a -Energy from your hand to Suicune, you must discard an Energy card attached to Suicune. (Attach the -Energy, and then discard an Energy card from Suicune)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Wave",
				'fr-fr': "Hypnovague",
				'de-de': "Hypno Wave"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts et le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89598,
				cardmarket: 275109
			}
		},
	]
}

export default card
