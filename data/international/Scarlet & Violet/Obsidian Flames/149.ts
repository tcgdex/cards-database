import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		'fr-fr': "Scalproie",
		'en-us': "Bisharp",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	evolveFrom: {
		'fr-fr': "Scalpion",
		'en-us': "Pawniard",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Griffe Acier",
			'en-us': "Metal Claw",
			'es-es': "Garra Metal",
			'it-it': "Ferrartigli",
			'pt-br': "Garra de Metal",
			'de-de': "Metallklaue"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'fr-fr': "Taillade",
			'en-us': "Fury Cutter",
			'es-es': "Corte Furia",
			'it-it': "Tagliofuria",
			'pt-br': "Cortador de Fúria",
			'de-de': "Zornklinge"
		},

		effect: {
			'fr-fr': "Lancez 3 pièces. S'il n'y a qu'un côté face, cette attaque inflige 20 dégâts supplémentaires. S'il y a 2 côtés face, cette attaque inflige 60 dégâts supplémentaires. S'il y a 3 côtés face, cette attaque inflige 120 dégâts supplémentaires.",
			'en-us': "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 60 more damage. If all of them are heads, this attack does 120 more damage.",
			'es-es': "Lanza 3 monedas. Si sale cara en una de ellas, este ataque hace 20 puntos de daño más. Si sale cara en 2, este ataque hace 60 puntos de daño más. Si sale cara en las 3, este ataque hace 120 puntos de daño más.",
			'it-it': "Lancia tre volte una moneta. Se esce testa una sola volta, questo attacco infligge 20 danni in più. Se esce testa due volte, ne infligge 60 in più, e se esce testa tutte e tre le volte, 120 in più.",
			'pt-br': "Jogue 3 moedas. Se 1 delas sair cara, este ataque causará 20 pontos de dano a mais. Se 2 delas saírem cara, este ataque causará 60 pontos de dano a mais. Se todas saírem cara, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wirf 3 Münzen. Zeigt 1 davon Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu. Zeigen 2 davon Kopf, fügt diese Attacke 60 Schadenspunkte mehr zu. Zeigen alle Münzen Kopf, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "50+"
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
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon commands a group of several Pawniard. Groups that are defeated in territorial disputes are absorbed by the winning side.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 781860,
				tcgplayer: 509936,
				cardtrader: 255834
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 725229
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725229,
				tcgplayer: 509936,
				cardtrader: 255834
			}
		},
	],

	illustrator: "GIDORA",

	
}

export default card
