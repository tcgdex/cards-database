import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		417,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Wave",
				fr: "Cage-éclair"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Poison Berry",
				fr: "Gorgée de poison"
			},
			effect: {
				en: "If you have Croagunk in play, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Poisoned.",
				fr: "Si vous avez un Cradopaud en jeu, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It makes electricity with pouches in its cheeks and shoots charges from its tail. It live atop trees.",
		fr: "Les poches de ses joues produisent de l'électricité et sa queue envoie des éclairs. Il vit dans les arbres."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278561,
		tcgplayer: 87902
	}
}

export default card
