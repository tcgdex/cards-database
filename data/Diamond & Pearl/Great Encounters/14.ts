import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		12,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Parallel Drain",
				fr: "Tuyau parallèle",
			},
			effect: {
				en: "After your attack, remove from 1 of your Pokémon the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Après votre attaque, retirez à 1 de vos Pokémon autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Dozing Scales",
				fr: "Écailles ensommeillées",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],





}

export default card
