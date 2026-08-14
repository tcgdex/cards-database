import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Baudrive",
		es: "Drifloon",
		it: "Drifloon",
		pt: "Drifloon",
		de: "Driftlon"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		425,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Creepy Wind",
				fr: "Vent Perturbant",
				de: "Schauriger Wind"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wind Blast",
				fr: "Vent Explosif",
				de: "Stürmische Stoßwelle"
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "These Pokémon are called the \"Signpost for Wandering Spirits.\" Children holding them sometimes vanish.",
		de: "Auch bekannt als „Wegweiser für umherstreifende Geister“. Kinder, die sie halten, verschwinden manchmal."
	},

	thirdParty: {
		cardmarket: 281055,
		tcgplayer: 84963
	}
}

export default card
