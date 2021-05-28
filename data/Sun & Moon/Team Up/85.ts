import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 170,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Tail",
				fr: "Queue Tournante",
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite Off",
				fr: "Arrachage",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-GX or a Pokémon-{EX}, this attack does 100 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-{EX}, cette attaque inflige 100 dégâts supplémentaires.",
			},
			damage: 130,

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
	retreat: 4,



}

export default card
