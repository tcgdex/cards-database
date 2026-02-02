import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Celebi ex",
		fr: "Celebi ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Time Reversal",
				fr: "Remonter dans le temps"
			},
			effect: {
				en: "Once during your turn, when you put Celebi ex from your hand onto your Bench, you may search your discard pile for a card, show it to your opponent, and put it on top of your deck.",
				fr: "Une seule fois pendant votre tour, lorsque vous placez Celebi ex de votre main sur votre Banc, vous pouvez chercher une carte dans votre pile de défausse. Montrez-la à votre adversaire et placez-la au dessus de votre deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Shield",
				fr: "Bouclier psychique"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Celebi ex by your opponent’s Pokémon-ex during your opponent’s next turn.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Celebi ex par le Pokémon-ex de votre adversaire lors du prochain tour de votre adversaire."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	suffix: "EX",
	retreat: 1,

	thirdParty: {
		cardmarket: 277448,
		tcgplayer: 84151
	}
}

export default card
