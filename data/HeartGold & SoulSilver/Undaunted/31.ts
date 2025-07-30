import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
		de: "Sleimok"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sludge Drag",
				fr: "Gliss’Crade",
				de: "Schlammzieher"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent’s Benched Pokémon. The new Defending Pokémon is now Confused and Poisoned.",
				fr: "Échangez le Pokémon Défenseur avec un Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Confus et Empoisonné.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Das neue Verteidigende Pokémon ist jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pester",
				fr: "Abattre",
				de: "Verfolgung"
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Its body is made of a powerful poison. Touching it accidentally will cause a fever that requires bed rest."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279284,
		tcgplayer: 87625
	}
}

export default card
