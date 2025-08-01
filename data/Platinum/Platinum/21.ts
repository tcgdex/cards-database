import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
		de: "Papinella"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		267,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Colorful Powder",
				fr: "Poudre colorée",
				de: "Colorful Powder"
			},
			effect: {
				en: "If Beautifly has 2 or less Energy attached to it, the Defending Pokémon is now Poisoned. If Beautifly has 3 Energy attached to it, the Defending Pokémon is now Burned and Poisoned. If Beautifly has 4 or more Energy attached to it, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Asleep, Burned, and Poisoned.",
				fr: "Si Charmillon possède un maximum de 2 Énergies, le Pokémon Défenseur est maintenant Empoisonné. Si Charmillon possède 3 Énergies, le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Si Charmillon possède au moins 4 Énergies, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi, Brûlé et Empoisonné.",
				de: "If Beautifly has 2 or less Energy attached to it, the Defending Pokémon is now Poisoned. If Beautifly has 3 Energy attached to it, the Defending Pokémon is now Burned and Poisoned. If Beautifly has 4 or more Energy attached to it, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Asleep, Burned, and Poisoned."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Silver Scale",
				fr: "Écaille argentée",
				de: "Silver Scale"
			},
			effect: {
				en: "If the Defending Pokémon has any Resistance, this attack's base damage is 60 instead of 30.",
				fr: "Si le Pokémon Défenseur possède une Résistance, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
				de: "If the Defending Pokémon has any Resistance, this attack's base damage is 60 instead of 30."
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

	thirdParty: {
		cardmarket: 278442,
		tcgplayer: 83759
	}
}

export default card
