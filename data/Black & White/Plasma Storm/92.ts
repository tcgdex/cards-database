import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		632,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Backup",
				fr: "Renforts",
			},
			effect: {
				en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Jail",
				fr: "Prison Métallique",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280831,
		tcgplayer: 85023
	}
}

export default card
