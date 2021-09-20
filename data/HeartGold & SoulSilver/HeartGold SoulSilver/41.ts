import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Glare",
				fr: "Intimidation",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fade Out",
				fr: "Faiblir",
			},
			effect: {
				en: "Return Dunsparce and all cards attached to it to your hand.",
				fr: "Reprenez Insolourdo et toutes les cartes qui lui sont attachées dans votre main.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When spotted, this Pokémon escapes backward by furiously boring into the ground with its tail."
	}
}

export default card
