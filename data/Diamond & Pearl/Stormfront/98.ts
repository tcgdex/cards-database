import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		fr: "Mackogneur LV.X",
	},
	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "No Guard",
				fr: "Annule garde",
			},
			effect: {
				en: "As long as Machamp is your Active Pokémon, each of Machamp's attacks does 60 more damage to the Active Pokémon (before applying Weakness and Resistance) and any damage done to Machamp by your opponent's Pokémon is increased by 60 (after applying Weakness and Resistance).",
				fr: "Tant que Mackogneur est votre Pokémon Actif, chacune des attaques de Mackogneur inflige 60 dégåts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance) et tous dégâts infligés à Mackogneur par des Pokémon de votre adversaire sont augmentés de 60 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strong-Willed",
				fr: "Têtu",
			},
			effect: {
				en: "During your opponent's next turn, if Machamp would be Knocked Out by damage from an attack, flip a coin. If heads, Machamp is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Lors du prochain tour de votre adversaire, si Mackogneur est mis K.O par des dégâts d'une attaque, lancez une pièce. Si c'est face, Mackogneur n'est pas mis K.O et il lui reste 10 PV.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+40"
		},
	],

	retreat: 3,



}

export default card
