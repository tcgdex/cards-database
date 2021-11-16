import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan"
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
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-venin"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
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
				fr: "Dards en chaîne"
			},
			effect: {
				en: "This attack does 50 damage plus 30 more damage for each Beedrill (excluding this one) you have in play.",
				fr: "Cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires pour chaque Dardargnan que vous avez en jeu (sans compter celui-ci)."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
