import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		455,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
				fr: "Engloutir",
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Carnivine. If the Defending Pokémon has fewer remaining HP than Carnivine's, this attack does 60 damage instead.",
				fr: "Avant d'infliger des dégâts, comptabilisez les PV restants du Pokémon Défenseur et de Vortente. Si le Pokémon Défenseur possède moins de PV que Vortente, cette attaque inflige 60 dégâts.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Wring Out",
				fr: "Essorage",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et défaussez alors une carte Énergie attachée au Pokémon Défenseur.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il attire sa proie avec sa salive odorante avant de la croquer. Il lui faut une journée pour l'avaler."
	}
}

export default card
