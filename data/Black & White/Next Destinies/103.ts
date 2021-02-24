import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		635,
	],
	hp: 150,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Aura",
				fr: "Aura de Ténèbres",
			},
			effect: {
				en: "All Energy attached to this Pokémon are Darkness Energy instead of their usual type.",
				fr: "Toutes les Énergies attachées à ce Pokémon sont des Énergies Darkness au lieu de leur type habituel.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Berserker Blade",
				fr: "Lame Folle",
			},
			effect: {
				en: "Does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
