import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Lunala",
		fr: "Lunala",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		792,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blessing of the Moone",
				fr: "Grâce du Halo Lunaire",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Solgaleo in play, you may search your deck for up to 2 Energy cards and attach them to your Solgaleo or Lunala in any way you like. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si vous avez Solgaleo en jeu, vous pouvez chercher jusqu’à 2 cartes Énergie dans votre deck, puis les attacher à vos Solgaleo ou Lunala, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Lunar Blast",
				fr: "Explosion Lunaire",
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
