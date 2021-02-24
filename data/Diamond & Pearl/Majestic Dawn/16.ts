import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cursed Alloy",
				fr: "Allié maudit",
			},
			effect: {
				en: "As long as Bronzong is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Powers between turns.",
				fr: "Tant qu'Archéodong est votre Pokémon Actif, placez entre deux tours 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant des Poké-Powers.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Pain Amplifier",
				fr: "Amplificateur de douleur",
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it.",
				fr: "Placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant déjà des marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Coating",
				fr: "Mettre une couche",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Bronzong by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Archéodong par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
