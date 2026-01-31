import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mew ex",
		fr: "Mew ex",
		de: "Mew ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Vision",
				fr: "Vision psy",
				de: "Psycho-Vision"
			},
			effect: {
				en: "Once during your turn (before your attack), if Mew ex is on your Bench, you may look at your opponent's hand.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Mew ex est sur votre Banc, vous pouvez regarder la main de votre adversaire.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir, wenn Mew ex sich auf deiner Bank befindet, die Handkarten deines Gegners anschauen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super psy",
				de: "Super-Psischlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Devo Crush",
				fr: "Devo broyage",
				de: "Devo Zerschmetterer"
			},
			effect: {
				en: "You may discard 2 Energy attached to Mew ex. If you do, you may remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
				fr: "Vous pouvez défausser 2 Énergies attachées à Mew ex. Vous pouvez alors retirer au Pokémon Défenseur la carte Évolution au niveau le plus élevé et la mélanger au deck de votre adversaire.",
				de: "Du kannst 2 Energien, die an Mew ex angelegt sind, auf deinen Ablagestapel legen. Wenn du das machst, kannst du die höchste Evolutionskarte vom Verteidigenden Pokémon entfernen. Dein Gegner mischt diese Karte in sein Deck."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277070,
		tcgplayer: 87410
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
