import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},

	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "V-Beatdown",
				fr: "Dérouillée Victoire",
				es: "Doblegar V",
				it: "Batosta V",
				pt: "Surra V",
				de: "V-Niederprügler"
			},
			effect: {
				en: "This attack does 20 damage for each of your Basic Pokémon in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de base en jeu.",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon Básicos en juego.",
				it: "Questo attacco infligge 20 danni per ogni tuo Pokémon Base in gioco.",
				pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon Básicos em jogo.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Basis-Pokémon im Spiel zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365689
	}
}

export default card
