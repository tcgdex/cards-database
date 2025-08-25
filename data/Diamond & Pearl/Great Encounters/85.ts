import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		de: "Sonnfel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sunlight",
				fr: "Rayon solaire",
				de: "Sonnenlicht"
			},
			effect: {
				en: "If you have Lunatone in play, damage done to your opponent's Pokémon by your Psychic or Fighting Pokémon isn't affected by Resistance.",
				fr: "Si vous avez Seleroc en jeu, les dégâts infligés aux Pokémon de votre adversaire par vos Pokémon Psychic ou Fighting ne sont pas affectés par la Résistance.",
				de: "Wenn du Lunastein im Spiel hast, wird Schaden, der gegnerischen Pokémon durch deine - oder -Pokémon zugefügt wird, durch Resistenz nicht verändert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sol Charge",
				fr: "Recharge solaire",
				de: "Solaraufladung"
			},
			effect: {
				en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 de vos Pokémon de Banc.",
				de: "Durchsuche deinen Ablagestapel nach einer Basis-Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277987,
		tcgplayer: 89428
	}
}

export default card
