import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		415,
	],

	hp: 30,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Enraged Assault",
				fr: "Assaut furieux",
			},
			effect: {
				en: "If Vespiquen is on your Bench and has any damage counters on it, this attack does 20 damage plus 60 more damage and the Defending Pokémon is now Poisoned.",
				fr: "Si Apireine se trouve sur votre Banc et a des marqueurs de dégât, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "At night, Combee sleep in a group of about a thousand, packed closely together in a lump."
	}
}

export default card
