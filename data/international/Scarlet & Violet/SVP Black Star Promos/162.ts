import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [972],
	set: Set,

	name: {
		'en-us': "Houndstone ex",
		'fr-fr': "Tomberro-ex",
		'es-es': "Houndstone ex",
		'it-it': "Houndstone-ex",
		'pt-br': "Houndstone ex",
		'de-de': "Friedwuff-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Greavard",
		'fr-fr': "Toutombe",
		'es-es': "Greavard",
		'it-it': "Greavard",
		'pt-br': "Greavard",
		'de-de': "Gruff"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Horrifying Fang",
			'fr-fr': "Croc Horrifiant",
			'es-es': "Colmillo Terrorífico",
			'it-it': "Zanna Orripilante",
			'pt-br': "Caninos Aterrorizantes",
			'de-de': "Grauenhafter Reißer"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño más por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano a mais para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "100+"
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
	retreat: 3,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "takuyoa",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 791831,
				tcgplayer: 591023
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				tcgplayer: 791832
			}
		}
	],
}

export default card
