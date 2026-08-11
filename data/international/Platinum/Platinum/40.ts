import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Toxicroak G",
		'fr-fr': "Coatox ",
		'de-de': "Toxiquak G"
	},

	illustrator: "Ryota Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [454],

	hp: 90,

	types: [
		"Psychic"
	],

	stage: "Basic",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Anticipation",
				'fr-fr': "Anticipation",
				'de-de': "Anticipation"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, excluding damage, done to Toxicroak G.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Coatox .",
				'de-de': "Prevent all effects of attacks, excluding damage, done to Toxicroak G."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Deep Poison",
				'fr-fr': "Poison profond",
				'de-de': "Deep Poison"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 40 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90012,
				cardmarket: 278461
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278461,
				tcgplayer: 90012
			}
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479964
			}
		}
	],

}

export default card
