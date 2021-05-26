import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supernatural Dance",
				fr: "Danse Surnaturelle",
			},
			effect: {
				en: "For each Pokémon in your opponent's discard pile, put 1 damage counter on your opponent's Pokémon in any way you like.",
				fr: "Pour chaque Pokémon dans la pile de défausse de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Revelation Dance",
				fr: "Danse Éveil",
			},
			effect: {
				en: "If there is no Stadium card in play, this attack does nothing.",
				fr: "S’il n’y a pas de carte Stade en jeu, cette attaque ne fait rien.",
			},
			damage: 30,

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
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
