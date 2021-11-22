import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		14,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Payback",
				fr: "Retour de poison"
			},
			effect: {
				en: "If Kakuna is your Active Pokémon and is damaged by an opponent's attack (even if Kakuna is Knocked Out), the Attacking Pokémon is now Poisoned.",
				fr: "Si Coconfort est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Kakuna est mis K.O), le Pokémon Attaquant est maintenant Empoisonné."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule"
			},

			damage: 10,

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
