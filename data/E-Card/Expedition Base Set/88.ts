import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Roucoups",
		de: "Tauboga"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [115],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Pidgey",
		fr: "Roucool"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Baby Outing",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "Look at the top 3 cards of your deck, and then choose 1 of those cards and put it into your hand. Shuffle the rest into your deck afterward.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange contre le Pokémon Défenseur. (Infligez les dégâts avant d'échanger les Pokémon.)",
				de: "Wenn dein Gegner mindestens ein Pokémon auf der Bank hat, wählt er 1 davon und tauscht es mit dem Verteidigenden Pokémon aus. (Füge die Schadenspunkte vor dem Austauschen der Pokémon zu.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88039,
				cardmarket: 274963
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
