import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Golbat",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				en: "Triggered Poison",
				fr: "Poison à retardement"
			},

			effect: {
				en: "If your opponent attaches an Energy card to the Defending Pokémon during his or her next turn, that Pokémon becomes Poisoned.",
				fr: "Si votre adversaire attache une carte Énergie au Pokémon Défenseur durant son prochain tour, ce Pokémon devient Empoisonné."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Cross Attack",
				fr: "Attaque croisée"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins deux faces, le Pokémon Défenseur est maintenant Confus."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Le battement de ses quatre ailes est si silencieux dans la nuit que personne ne remarque sa présence, même s'il est tout près."
	}
}

export default card
