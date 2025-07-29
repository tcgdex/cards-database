import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call Sign",
				fr: "Signe d’Appel",
			},
			effect: {
				en: "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon Water dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cryofreeze",
				fr: "Cryogel",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon. The Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Défaussez une Énergie attachée à ce Pokémon. Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280908
	}
}

export default card
