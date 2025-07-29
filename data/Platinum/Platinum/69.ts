import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Healing Trial",
				fr: "Défi guérison",
				de: "Healing Trial"
			},
			effect: {
				en: "Flip a coin. If heads, remove 3 damage counters from Chansey. If tails, remove 3 damage counters from the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, retirez à Leveinard 3 marqueurs de dégât. Si c'est pile, retirez au Pokémon Défenseur 3 marqueurs de dégât.",
				de: "Flip a coin. If heads, remove 3 damage counters from Chansey. If tails, remove 3 damage counters from the Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulled Punch",
				fr: "Poing-doux",
				de: "Pulled Punch"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 40.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, les dégâts de base de cette attaque sont de 10 au lieu de 40.",
				de: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 40."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278490
	}
}

export default card
