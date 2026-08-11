import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [673],
	set: Set,

	name: {
		'en-us': "Gogoat",
		'fr-fr': "Chevroum",
		'es-es': "Gogoat",
		'it-it': "Gogoat",
		'pt-br': "Gogoat",
		'de-de': "Chevrumm"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rising Lunge",
			'fr-fr': "Botte Secrète",
			'es-es': "Embestida Ascendente",
			'it-it': "Elevazione",
			'pt-br': "Investida Ascendente",
			'de-de': "Aufwärtsstoß"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'de-de': "Solarstrahl"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Gemi",

	description: {
		'en-us': "It can sense the feelings of others by touching them with its horns. This species has assisted people with their work since 5,000 years ago.",
	},

	thirdParty: {
        cardmarket: 702309,
        tcgplayer: 487843
    }
}

export default card