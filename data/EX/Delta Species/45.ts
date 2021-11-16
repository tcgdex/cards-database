import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Illumise",
		fr: "Lumivole"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		314,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Beacon Protection",
				fr: "Lumière protectrice"
			},
			effect: {
				en: "As long as you have Volbeat in play, prevent all effects, including damage, done to Illumise by attacks from your opponent's Pokémon that has Dark in its name.",
				fr: "Tant que votre Muciole est en jeu, prévenez tous les effets, dégâts inclus, infligés à Lumivole par des attaques de Pokémon de votre adversaire dont le nom comporte Obscur."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Strange Rasping",
				fr: "Grincement étrange"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, il est maintenant Confus."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
