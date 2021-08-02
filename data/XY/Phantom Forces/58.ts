import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Malamar EX",
		fr: "Sepiatroce EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		687,
	],
	hp: 170,
	types: [
		"Darkness",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hyper Hypnosis",
				fr: "Hypnose Intense",
			},
			effect: {
				en: "When you attach an Energy from your hand to this Pokémon, you may use this Ability. Your opponent’s Active Pokémon is now Asleep.",
				fr: "Lorsque vous attachez une Énergie de votre main à ce Pokémon, vous pouvez utiliser ce talent. Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "MAXamar",
				fr: "MAXatroce",
			},
			effect: {
				en: "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "60×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
