import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
		de: "Milotic"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Shower",
				fr: "Douche guérisseuse",
				de: "Healing Shower"
			},
			effect: {
				en: "Once during your turn, when you play Milotic from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon and your opponent's Pokémon (excluding Pokémon-ex).",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Milobellus de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez retirer à vos Pokémon et à ceux de votre adversaire tous leurs marqueurs de dégât (Pokémon-ex exclus).",
				de: "Once during your turn, when your play Milotic from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon and your opponent's Pokémon (excluding Pokémon-ex)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
				de: "Wave Splash"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Distorted Wave",
				fr: "Vague tordue",
				de: "Distorted Wave"
			},
			effect: {
				en: "Before doing damage, remove 3 damage counters from the Defending Pokémon (all if there are less than 3).",
				fr: "Avant d'infliger des dégâts, retirez au Pokémon Défenseur 3 marqueurs de dégât (retirez-les lui tous s'il en possède moins de 3).",
				de: "Before doing damage, remove 3 damage counters from the Defending Pokémon (all if there are less than 3)."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276086,
		tcgplayer: 87452
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "holo",
			stamp: ["jeremy-maron"]
		}
	]
}

export default card
