import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 80,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Moonlight Veil",
				fr: "Voile lunaire",
			},
			effect: {
				en: "Each of your Pokémon that evolves from Eevee has no Weakness, and that Pokémon's Retreat Cost is 0.",
				fr: "Chacun de vos Pokémon évoluant d'Evoli ne possède pas de Faiblesse et a un Coût de retraite de 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
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
