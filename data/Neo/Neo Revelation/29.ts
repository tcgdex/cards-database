import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Golbat",
		fr: "Nosferalto",
		de: "Golbat"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Zubat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
				fr: "Grincement",
				de: "Screech"
			},
			effect: {
				en: "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
				fr: "Jusqu'à la fin de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 20 dégâts supplémentaires au Pokémon Défenseur.",
				de: "Until the end of your next turn, if an attack damage the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Bite",
				fr: "Morsure empoisonnée",
				de: "Poison Bite"
			},
			effect: {
				en: "If this attack damages the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Golbat equal to half that damage (rounded up to the nearest 10). If Golbat has fewer damage counters than that, remove all of them. Either way, the Defending Pokémon is now Poisoned.",
				fr: "Si cette attaque inflige des dégâts au Pokémon Défenseur, le Pokémon Défenseur est maintenant Empoisonné et vous retirez à Nosferalto un nombre de marqueurs de dégâts égal à la moitié de ces dégâts. Si Nosferalto a moins de marqueurs de dégâts que cela, retirez-les tous. Dans tous les cas, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "If this attack damage the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Golbat equal to half that damage (rounded up to the nearest 10). If Golbat has fewer damage counters than that, remove all of them. Either way, the Defending Pokémon is now Poisoned."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
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
		fr: "Il peut boire jusqu'à 5 litres de sang d'un seul coup. S'il en boit trop, il devient trop lourd et a du mal à voler."
	},

	thirdParty: {
		cardmarket: 274615
	}
}

export default card
