import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		477,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Grim Marking",
				fr: "Symbole Sinistre",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, put 4 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque d’un adversaire, placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psych Up",
				fr: "Boost",
			},
			effect: {
				en: "During your next turn, this Pokémon's Psych Up attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Boost de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
