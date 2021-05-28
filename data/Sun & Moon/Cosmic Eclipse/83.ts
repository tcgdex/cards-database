import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skelénox",
	},
	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		355,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Spiritborne Evolution",
				fr: "Évolution Spirituelle",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard 3 cards from your hand. If you do, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser 3 cartes de votre main. Dans ce cas, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Ominous Eyes",
				fr: "Regard Menaçant",
			},
			effect: {
				en: "Put 2 damage counters on 1 of your opponent's Pokémon.",
				fr: "Placez 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
			},

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
