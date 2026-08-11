import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Muk",
		'fr-fr': "Grotadmorv",
		'de-de': "Sleimok"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [89],

	hp: 100,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sludge Cell",
				'fr-fr': "Celllule vaseuse",
				'de-de': "Sludge Cell"
			},
			effect: {
				'en-us': "If Muk remains affected by any Special Conditions between turns, remove 2 damage counters from Muk.",
				'fr-fr': "Au début du tour de chaque joueur, si Grotadmorv est affecté par un État Spécial, retirez-lui 2 marqueurs de dégât.",
				'de-de': "If Muk remains affected by any Special Condition between turns, remove 2 damage counters from Muk."
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
				'en-us': "Strange Poison",
				'fr-fr': "Poison étrange",
				'de-de': "Strange Poison"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, Muk is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, Grotadmorv est maintenant Empoisonné.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, Muk is now Poisonened."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Strange Sludge",
				'fr-fr': "Vase étrange",
				'de-de': "Strange Sludge"
			},
			effect: {
				'en-us': "If Muk is Poisoned, this attack does 50 damage plus 20 more damage and the Defending Pokémon is now Confused.",
				'fr-fr': "Si Grotadmorv est Empoisonné, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If Muk is Poisoned, this attack does 50 damage plus 20 more damage and the Defending Pokémon is now Confused."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87624,
				cardmarket: 278478
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278478,
				tcgplayer: 87624
			}
		}
	],

}

export default card
