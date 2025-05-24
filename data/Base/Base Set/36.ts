import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Magmar",
		pt: "Magmar",
		fr: "Magmar",
		de: "Magmar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Punch",
				pt: "Fire Punch",
				fr: "Poing de Feu",
				de: "Feuerschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				pt: "Flamethrower",
				fr: "Lance-flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard 1 Energy card attached to Magmar in order to use this attack.",
				pt: "Discard 1 Energy card attached to Magmar in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Magmar pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Magmar abgelegte  Energiekarte, um diesen Angriff auszuführen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Son corps en fusion brûle d'une flamme orangée, le rendant invisible dans le feu."
	}
}

export default card
