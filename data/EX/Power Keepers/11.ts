import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		de: "Machomei"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overzealous",
				fr: "Excès de zèle",
				de: "Übereifrig"
			},
			effect: {
				en: "If your opponent has any Pokémon-ex in play, each of Machamp's attacks does 30 more damage to the Defending Pokémon.",
				fr: "Si votre adversaire possède des Pokémon-ex en jeu, chacune des attaques de Mackogneur inflige 30 dégâts supplémentaires au Pokémon Défenseur.",
				de: "Wenn dein Gegner mindestens 1 Pokémon-ex im Spiel hat, fügt jeder Angriff von Machomei dem Verteidigenden Pokémon 30 weitere Schadenspunkte zu"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Brick Smash",
				fr: "Casse-Brique",
				de: "Durchbruch"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunnkte dieses Angriffs."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross Chop",
				fr: "Coup-croix",
				de: "Kreuzhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 60 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277317,
		tcgplayer: 86964
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
