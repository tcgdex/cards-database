import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [52],
	set: Set,

	name: {
		'en-us': "Galarian Meowth",
		'fr-fr': "Miaouss de Galar",
		'es-es': "Meowth de Galar",
		'it-it': "Meowth di Galar",
		'pt-br': "Meowth de Galar",
		'de-de': "Galar-Mauzi"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Fasten Claws",
			'fr-fr': "Griffes Accrochantes",
			'es-es': "Afianzagarras",
			'it-it': "Serrartigli",
			'pt-br': "Firmar Garras",
			'de-de': "Klauen anlegen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Living with a savage, seafaring people has toughened this Pokémon's body so much that parts of it have turned to iron.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691802,
				tcgplayer: 477163
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691802,
				tcgplayer: 477163
			}
		},
	],
}

export default card
