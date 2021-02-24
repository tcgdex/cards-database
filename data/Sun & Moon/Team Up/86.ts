import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Poochyena",
		fr: "Medhyèna",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		261,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Howl in the Dark",
				fr: "Hurlement Nocturne",
			},
			effect: {
				en: "Search your deck for up to 2 Darkness Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 Pokémon Darkness dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
