import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Pelipper δ",
		fr: "Pelipper δ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		279,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Wingull",
		fr: "Goélise"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mist",
				fr: "Brume"
			},
			effect: {
				en: "Any damage done to Pelipper by attacks from Stage 2 Evolved Pokémon (both yours and your opponent’s) is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Les dégâts infligés à Bekipan par des attaques des Pokémon Évolués de Niveau 2 (les vôtres et ceux de votre adversaire) sont réduits de 30 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Wing",
				fr: "Aile éclair"
			},
			effect: {
				en: "Does 10 damage to 1 of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277496
	}
}

export default card
