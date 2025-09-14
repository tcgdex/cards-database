import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [W]",
		fr: "Zarbi W",
		de: "Icognito W"
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
				en: "[Want]",
				fr: "[Want]",
				de: "Want"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown W, Unown A, Unown N, and Unown T on your Bench, you may flip a coin. If heads, put a Trainer card from your discard pile into your hand.",
				fr: "Une fois pendant votre tour (avant votre attaque), si vous avez Zarbi [W], Zarbi [A], Zarbi [N] et Zarbi [T] sur votre Banc, vous pouvez lancer une pièce. Si c'est face, ajoutez une carte Dresseur de votre pile de défausse à votre main.",
				de: "Once during your turn (before your attack), if you have Unown W, Unown A, Unown N, and Unown T on your Bench, you may flip a coin. If heads, put a Trainer card from your discard pile into your hand."
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
		cardmarket: 274681,
		tcgplayer: 90240
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
