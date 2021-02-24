import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		612,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Grind Up",
				fr: "Mouture",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard any Stadium card in play. If you do, attach up to 3 in any combination of Fire and Metal Energy cards from your hand to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toute carte Stade en jeu. Dans ce cas, attachez une combinaison d’un maximum de 3 cartes Énergie Fire ou Metal de votre main à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Metal",
			],
			name: {
				en: "Powerful Axe",
				fr: "Hache Puissante",
			},
			effect: {
				en: "This attack does 40 more damage times the amount of basic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 40 dégâts supplémentaires multipliés par le nombre d’Énergies de base attachées à ce Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
