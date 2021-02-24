import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex Niv. X",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Big Appetite",
				fr: "Gros appétit",
			},
			effect: {
				en: "Once during your turn (before your attack), if Snorlax is your Active Pokémon, you may draw cards until you have 6 cards in your hand. If you do, Snorlax is now Asleep. This power can't be used if Snorlax is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Ronflex est votre Pokémon Actif, vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main. Ronflex est alors maintenant Endormi. Ce pouvoir ne peut pas être utilisé si Ronflex est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Exercise",
				fr: "Exercise",
			},
			effect: {
				en: "You may discard as many Energy cards as you like from your hand. If you do, remove that many damage counters from Snorlax.",
				fr: "Vous pouvez défausser de votre main autant de cartes Énergie que vous le voulez. Retirez alors à Ronflex autant de marqueurs de dégât.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
