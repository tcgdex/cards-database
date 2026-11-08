import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'de-de': "Vulnona"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [38],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Safeguard",
				'fr-fr': "Rune protectrice",
				'de-de': "Safeguard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Ninetales by your opponent's Pokémon-ex.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Feunard par le Pokémon-ex de votre adversaire.",
				'de-de': "Prevent all effects of attacks, including damage, done to Ninetales by your opponent's Pokémon-ex."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Will-o'-the-wisp",
				'fr-fr': "Feu follet",
				'de-de': "Will-o'-the-wisp"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87769,
				cardmarket: 276096
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 87769,
				cardmarket: 276096
			}
		},
	]
}

export default card
