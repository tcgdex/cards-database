import { Card } from '../../../interfaces'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Punishment",
				fr: "Punition",
			},
			effect: {
				en: "If the Defending Pokémon is a Stage 2 Pokémon, this attack does 20 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon de Niveau 2, cette attaque inflige 20 dégâts supplémentaires",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Snarl",
				fr: "Aboiement",
			},
			effect: {
				en: "During your opponent's next turn, damage from the Defending Pokémon attacks is reduced by 20.",
				fr: "Pendant le prochain tour de votre adversaire, les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 20.",
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
	retreat: 1,



}

export default card
