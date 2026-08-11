import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Pure Body",
				'fr-fr': "Corps pur"
			},
			effect: {
				'en-us': "Whenever you attach a Water Energy card from your hand to Suicune, discard an Energy card attached to Suicune. (You can't attach a Water Energy card from your hand if Suicune has no Energy cards attached.)",
				'fr-fr': "Pour attacher une carte Énergie  de votre main à Suicune, vous devez vous défausser d'une carte Énergie attachée à Suicune."
			},
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
				'fr-fr': "Hypnovague"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts et le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 89603
			}
		},
	]
}

export default card
