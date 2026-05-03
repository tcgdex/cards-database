import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		de: "Bibor"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
				de: "Poison Sting"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Link Needle",
				fr: "Dards en chaîne",
				de: "Link Needle"
			},
			effect: {
				en: "This attack does 50 damage plus 30 more damage for each Beedrill (excluding this one) you have in play.",
				fr: "Cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires pour chaque Dardargnan que vous avez en jeu (sans compter celui-ci).",
				de: "This attack does 50 damage plus 30 more damage for each Beedrill (excluding this one)you have in play."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276177,
		tcgplayer: 83769
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
