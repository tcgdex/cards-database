import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
		de: "Regigigas"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [486],

	hp: 100,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Stomp",
				fr: "Double écrasement",
				de: "Doppelstampfer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 4,

	description: {
		en: "There is an enduring legend that states this Pokémon towed continents with ropes.",
		fr: "Une légende tenace veut que ce Pokémon ait traîné les continents en les attachant à des cordes.",
		de: "Es gibt eine Legende, wonach dieses PKMN die Kontinente mit einem Seil gezogen hat."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88664,
				cardmarket: 278555
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88664,
				cardmarket: 278555
			},
		},
	],

}

export default card
