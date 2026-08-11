import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'es-mx': "Murkrow",
		'de-de': "Kramurx",
		'it-it': "Murkrow",
		'pt-br': "Murkrow"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [198],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Ambush",
			'fr-fr': "Embuscade",
			'es-es': "Emboscada",
			'es-mx': "Emboscada",
			'de-de': "Hinterhalt",
			'it-it': "Imboscata",
			'pt-br': "Emboscada"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "I",

	description: {
		'en-us': "Feared and loathed by many, it is believed to bring misfortune to all those who see it at night.",
	},

	illustrator: "Tomokazu Komiya",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857632,
				tcgplayer: 662202,
				cardtrader: 356840
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857632,
				tcgplayer: 662202,
				cardtrader: 356840
			}
		},
	],	
}

export default card
