import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Walrein",
		fr: "Kaimorse",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cold Snap",
				fr: "Vague de Froid",
			},
			effect: {
				en: "Your opponent can't play any Trainer cards from their hand during their next turn. If 1 of your Pokémon used Cold Snap during your last turn, this attack can't be used.",
				fr: "Votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour. Si l’un de vos Pokémon a utilisé Vague de Froid pendant votre dernier tour, cette attaque ne peut pas être utilisée.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
