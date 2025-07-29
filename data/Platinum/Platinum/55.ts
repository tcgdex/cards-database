import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Mismagius",
		fr: "Magirêve",
		de: "Traunmagil"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		429,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Upper Hand",
				fr: "Tourmente",
				de: "Upper Hand"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Il ne peut pas l'utiliser lors du prochain tour de votre adversaire.",
				de: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale psy",
				de: "Psybeam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278476
	}
}

export default card
