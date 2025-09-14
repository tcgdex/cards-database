import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [H]",
		fr: "Zarbi H",
		de: "Icognito H"
	},

	illustrator: "CR CG gangs",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[Help]",
				fr: "Help",
				de: "Help"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown H, Unown E, Unown L, and Unown P on your Bench, you may shuffle your hand into your deck, then draw a new hand of the same number of cards.",
				fr: "Une fois pendant votre tour (avant votre attaque), si vous avez Zarbi [H], Zarbi [E], Zarbi [L] et Zarbi [P] sur votre Banc, vous pouvez mélanger votre main à votre deck et piocher une nouvelle main ayant le même nombre de cartes que la précédente.",
				de: "Du kannst immer einmal in deinem Zug (vor deinem Angriff), wenn du Icognito H, Icognito E, Icognito L und Icognito P auf deiner Bank hast, die Karten auf deiner Hand in dein Deck mischen und danach genauso viele Karten neu ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	},

	thirdParty: {
		cardmarket: 274680,
		tcgplayer: 90211
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
