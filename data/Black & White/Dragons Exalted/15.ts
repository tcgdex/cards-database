import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Le Parfum",
				fr: "Parfum",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may search your deck for any card and put it into your hand. Shuffle your deck afterward.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez chercher une carte dans votre deck et l'ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Squeeze",
				fr: "Compression",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
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
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
