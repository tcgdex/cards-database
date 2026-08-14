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
		fr: "Escargaume",
		de: "Schnuthelm"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
				de: "Einhämmern"
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
				fr: "Délit de Fuite",
				de: "Peinigen und Abhauen"
			},
			effect: {
				en: "The Defending Pokémon is now Paralyzed and Poisoned. Shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Le Pokémon Défenseur est maintenant Paralysé et Empoisonné. Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				de: "Das Verteidigende Pokémon ist jetzt paralysiert und vergiftet. Mische dieses Pokémon und alle daran angelegten Karten zurück in dein Deck."
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

	description: {
		en: "When its body dries out, it weakens. So, to prevent dehydration, it wraps itself in many layers of thin membrane.",
		de: "Da es ohne Flüssigkeit an Kraft verliert, schützt es sich mit mehreren dünnen Hautschichten vor dem Austrocknen."
	},

	thirdParty: {
		cardmarket: 280339,
		tcgplayer: 83460
	}
}

export default card
