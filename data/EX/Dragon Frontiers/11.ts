import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Togetic δ",
		fr: "Togetic δ ESPÈCES DELTA"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		176,
	],
	hp: 60,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Togepi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Delta Copy",
				fr: "Copiage Delta"
			},
			effect: {
				en: "Choose an attack on 1 of your opponent's Pokémon in play that has δ on its card. Delta Copy copies that attack except for its Energy cost. (You must still do anything else required for that attack.) Togetic performs that attack.",
				fr: "Choisissez une attaque d'1 des Pokémon en jeu de votre adversaire possédant le symbole δ. Copiage Delta copie cette attaque, son Coût en Énergie excepté. (Vous devez toujours faire ce que l'attaque indique.) Togetic utilise cette attaque."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
