import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Meganium"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bayleef",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ultra Powder",
				fr: "Poudre ultra"
			},
			effect: {
				en: "Flip 3 coins. If the first coin is heads, the Defending Pokémon is now Poisoned. If the second coin is heads, the Defending Pokémon is now Burned. If the third coin is heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez 3 pièces. Si la première pièce est face, le Pokémon Défenseur est maintenant Empoisonné. Si la deuxième pièce est face, le Pokémon Défenseur est maintenant Brûlé. Si la troisième pièce est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fire Counterattack",
				fr: "Contre-attaque de feu"
			},
			effect: {
				en: "If your opponent has any Fire Pokémon in play, this attack does 60 damage plus 30 more damage.",
				fr: "Si votre adversaire possède des Pokémon Fire en jeu, cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	description: {
		fr: "Son souffle a l'incroyable capacité de ranimer les plantes et les fleurs flétries."
	}
}

export default card
