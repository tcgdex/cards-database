import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
		de: "Teddiursa"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		216,
	],

	hp: 60,

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
				en: "Rest",
				fr: "Repos",
				de: "Ruhe"
			},
			effect: {
				en: "Remove all Special Conditions and 2 damage counters from Teddiursa. Teddiursa is now Asleep.",
				fr: "Retirez à Teddiursa tous ses États Spéciaux ainsi que 2 marqueurs de dégât. Teddiursa est maintenant Endormi.",
				de: "Entferne alle Speziellen Zustände und 2 Schadensmarken von Teddiursa. Teddiursa schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sweet Palm",
				fr: "Douce paume",
				de: "Süße Tatze"
			},
			effect: {
				en: "Before doing damage, remove 1 damage counter from the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, retirez 1 marqueur de dégât au Pokémon Défenseur.",
				de: "Bevor der Schaden zugefügt wird, entferne 1 Schadensmarke vom Verteidigenden Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	description: {
		fr: "Il baigne ses griffes dans le miel pour les lécher. Chaque paire de pattes a un goût unique."
	},

	thirdParty: {
		cardmarket: 277734
	}
}

export default card
