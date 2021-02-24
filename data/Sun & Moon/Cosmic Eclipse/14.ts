import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		402,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Improvisational Performance",
				fr: "Performance Improvisée",
			},
			effect: {
				en: "If you have exactly 1 card in your hand, this attack does 100 more damage. If you have exactly 3 cards in your hand, your opponent's Active Pokémon is now Confused. If you have exactly 6 cards in your hand, this attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "S’il vous reste exactement une carte en main, cette attaque inflige 100 dégâts supplémentaires. S’il vous reste exactement 3 cartes en main, le Pokémon Actif de votre adversaire est maintenant Confus. S’il vous reste exactement 6 cartes en main, cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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

	retreat: 2,



}

export default card
