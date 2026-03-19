import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
		es: "Accelgor",
		it: "Accelgor",
		pt: "Accelgor",
		de: "Hydragil"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deck and Cover",
				fr: "Délit de Fuite"
			},
			effect: {
				en: "The Defending Pokémon is now Paralyzed and Poisoned. Shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Le Pokémon Défenseur est maintenant Paralysé et Empoisonné. Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 280339,
		tcgplayer: 83460
	}
}

export default card
