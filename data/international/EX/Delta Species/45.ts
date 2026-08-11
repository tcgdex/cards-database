import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Illumise",
		fr: "Lumivole",
		de: "Illumise"
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
				fr: "Lumière protectrice",
				de: "Beacon Protection"
			},
			effect: {
				en: "As long as you have Volbeat in play, prevent all effects, including damage, done to Illumise by attacks from your opponent's Pokémon that has Dark in its name.",
				fr: "Tant que votre Muciole est en jeu, prévenez tous les effets, dégâts inclus, infligés à Lumivole par des attaques de Pokémon de votre adversaire dont le nom comporte Obscur.",
				de: "As long as you have Volbeat in play, prevent all effects, including damage, done to Illumise by attacks from your opponent's Pokémon that has Dark in its name."
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
				fr: "Appel à la famille",
				de: "Call for Family"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Grass",
			],
			name: {
				en: "Strange Rasping",
				fr: "Grincement étrange",
				de: "Strange Rasping"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, il est maintenant Confus.",
				de: "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused."
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


	retreat: 1,

	thirdParty: {
		cardmarket: 276808,
		tcgplayer: 86266
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

