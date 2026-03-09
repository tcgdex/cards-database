import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Altaria ex",
		fr: "Altaria ex",
		de: "Altaria ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mist",
				fr: "Brume",
				de: "Mist"
			},
			effect: {
				en: "Any damage done to Altaria ex by attacks from Stage 2 Evolved Pokémon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Les dégâts infligés à Altaria ex par des attaques de Pokémon Évolués de Niveau 2 (les vôtres et ceux de votre adversaire) sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Any damage done to Altaria ex by attacks from Stage 2 Evolved Pokémon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dive",
				fr: "Plongée",
				de: "Dive"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Mist",
				fr: "Brume de dragon",
				de: "Dragon Mist"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "This attack's damage isn't affected by Resistance, Poke-Powers, Poke-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 70,

		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 83524,
		cardmarket: 276601
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
