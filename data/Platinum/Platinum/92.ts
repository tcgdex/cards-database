import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shuppet",
		fr: "Polychombr",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		353,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Hypnotic Gaze",
				fr: "Regard hypnotique",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fade Out",
				fr: "Faiblir",
			},
			effect: {
				en: "Return Shuppet and all cards attached to it to your hand. (If you don't have any Benched Pokémon, this attack does nothing.)",
				fr: "Reprenez dans votre main Polychombr ainsi que toutes les cartes qui lui sont attachées. (Si vous ne possédez pas de Pokémon de Banc, cette attaque est sans effet.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
