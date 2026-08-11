import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'es-mx': "Piloswine",
		'de-de': "Keifel",
		'it-it': "Piloswine",
		'pt-br': "Piloswine"
	},

	evolveFrom: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'es-es': "Swinub",
		'es-mx': "Swinub",
		'de-de': "Quiekel",
		'it-it': "Swinub",
		'pt-br': "Swinub",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [221],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rising Lunge",
			'fr-fr': "Botte Secrète",
			'es-es': "Embestida Ascendente",
			'es-mx': "Embestida Ascendente",
			'de-de': "Aufwärtsstoß",
			'it-it': "Elevazione",
			'pt-br': "Investida Ascendente"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais."
		},

		damage: "30+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
			'es-es': "Golpe Gélido",
			'es-mx': "Golpazo Gélido",
			'de-de': "Frostschlag",
			'it-it': "Gelocolpo",
			'pt-br': "Pancada Congelada"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "Covered by a shaggy coat, it is resistant to the cold. Its tusks of ice thicken when it snows.",
	},

	illustrator: "Shinya Komatsu",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857599,
				tcgplayer: 662213,
				cardtrader: 356807
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857599,
				tcgplayer: 662213,
				cardtrader: 356807
			}
		},
	],
}

export default card
