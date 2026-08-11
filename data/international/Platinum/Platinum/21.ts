import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Beautifly",
		'fr-fr': "Charmillon",
		'de-de': "Papinella"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [267],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Colorful Powder",
				'fr-fr': "Poudre colorée",
				'de-de': "Colorful Powder"
			},
			effect: {
				'en-us': "If Beautifly has 2 or less Energy attached to it, the Defending Pokémon is now Poisoned. If Beautifly has 3 Energy attached to it, the Defending Pokémon is now Burned and Poisoned. If Beautifly has 4 or more Energy attached to it, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Asleep, Burned, and Poisoned.",
				'fr-fr': "Si Charmillon possède un maximum de 2 Énergies, le Pokémon Défenseur est maintenant Empoisonné. Si Charmillon possède 3 Énergies, le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Si Charmillon possède au moins 4 Énergies, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi, Brûlé et Empoisonné.",
				'de-de': "If Beautifly has 2 or less Energy attached to it, the Defending Pokémon is now Poisoned. If Beautifly has 3 Energy attached to it, the Defending Pokémon is now Burned and Poisoned. If Beautifly has 4 or more Energy attached to it, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Asleep, Burned, and Poisoned."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Silver Scale",
				'fr-fr': "Écaille argentée",
				'de-de': "Silver Scale"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Resistance, this attack's base damage is 60 damage instead of 30.",
				'fr-fr': "Si le Pokémon Défenseur possède une Résistance, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
				'de-de': "If the Defending Pokémon has any Resistance, this attack's base damage is 60 instead of 30."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "Despite its looks, it is aggressive. It jabs with its long, thin mouth if disturbed while collecting pollen."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 83759,
				cardmarket: 278442
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278442,
				tcgplayer: 83759
			}
		}
	],

	retreat: 0
}

export default card
