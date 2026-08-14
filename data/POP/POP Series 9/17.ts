import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
		de: "Chelast"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [387],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Absorb",
				fr: "Vol-Vie",
				de: "Absorber"
			},
			effect: {
				en: "Remove 1 damage counter from Turtwig.",
				fr: "Retirez un marqueur de dégât à Tortipouss.",
				de: "Entferne 1 Schadensmarke von Chelast."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Parboil",
				fr: "Parboil",
				de: "Vorkochen"
			},
			effect: {
				en: "If you have Chimchar in play, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.",
				fr: "Si vous avez Ouisticram en jeu, cette attaque inflige 40 dégâts plus 20 dégâts. Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wenn du Panflam im Spiel hast, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	description: {
		en: "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
		fr: "Son corps produit de l'oxygène par photosynthèse. La feuille sur sa tête flétrit quand il a soif.",
		de: "Sein Körper lebt von der Photosynthese, die Sauerstoff freisetzt. Ist es durstig welkt sein Blatt."
	},

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90078,
				cardmarket: 278568
			},
		},
	],

}

export default card
