import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Talonflame",
		fr: "Flambusard",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		663,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gale Wings",
				fr: "Ailes Bourrasque",
			},
			effect: {
				en: "If this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon.",
				fr: "Si ce Pokémon est dans votre main lorsque vous vous apprêtez à jouer, vous pouvez le placer, face cachée, en tant que Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Aero Blitz",
				fr: "Attaque Aérienne",
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu’à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
