import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Blaziken FB",
		fr: "Brasegali ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 110,
	types: [
		"Fire",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Burning Spirit",
				fr: "Esprit brûlant",
			},
			effect: {
				en: "Any damage done by attacks to a Burned Pokémon (both yours and your opponent's) is increased by 40 (after applying Weakness and Resistance). No more than 40 damage can be added by all Burning Spirit Poké-Bodies.",
				fr: "Tous les dégâts infligés par des attaques à un Pokémon Brûlé (les vôtres et ceux de votre adversaire) sont augmentés de 40 (après application de la Faiblesse et de la Résistance). Les Poké-Bodies Esprit brûlant ne peuvent pas ajouter plus de 40 dégâts.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Jet Shoot",
				fr: "Coup éclair",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Blaziken FB by attacks is increased by 40 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous les dégâts infligés à Brasegali  par des attaques sont augmentés de 40 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
