import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [955],
	set: Set,

	name: {
		'en-us': "Flittle",
		'fr-fr': "Flotillon",
		'es-es': "Flittle",
		'it-it': "Flittle",
		'pt-br': "Flittle",
		'de-de': "Flattutu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque",
			'es-es': "Ataque Rápido",
			'it-it': "Attacco Rapido",
			'pt-br': "Ataque Rápido",
			'de-de': "Ruckzuckhieb"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It spends its time running around wastelands. If anyone steals its beloved berries, it will chase them down and exact its revenge.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740571,
				tcgplayer: 523745,
				cardtrader: 265179
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740571,
				tcgplayer: 523745,
				cardtrader: 265179
			}
		},
	],

	illustrator: "Mizue",

	
}

export default card
