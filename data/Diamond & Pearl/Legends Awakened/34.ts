import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Mesprit",
		fr: "Créfollet",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		481,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Bind",
				fr: "Attache psy",
			},
			effect: {
				en: "Once during your turn, when you put Mesprit from your hand onto your Bench, you may use this power. Your opponent can't use any Poké-Powers on his or her Pokémon during your opponent's next turn.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Créfollet de votre main sur votre Banc, vous pouvez utiliser ce pouvoir. Votre adversaire ne peut pas utiliser de Poké-Powers de son Pokémon lors du prochain tour de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Extrasensory",
				fr: "Extrasenseur",
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 20 damage plus 50 more damage.",
				fr: "Si vous avez autant de cartes en main que votre adversaire, cette attaque inflige 20 dégâts plus 50 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
