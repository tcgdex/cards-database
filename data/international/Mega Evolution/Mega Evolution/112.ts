import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'de-de': "Kosturso",
		'it-it': "Bewear",
		'es-es': "Bewear",
		'pt-br': "Bewear",
		'es-mx': "Bewear"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'de-de': "Velursi",
		'it-it': "Stufful",
		'es-es': "Stufful",
		'pt-br': "Stufful",
		'es-mx': "Stufful"
	},
	stage: "Stage1",
	dexId: [760],


	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Knuckle Punch",
			'fr-fr': "Coud'Phalange",
			'de-de': "Knöchelhieb",
			'it-it': "Noccapugno",
			'es-es': "Puño con Nudillos",
			'pt-br': "Soco com Punho",
			'es-mx': "Puño con Nudillos"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hyper Lariat",
			'fr-fr': "Hyper Lasso",
			'de-de': "Hyperlasso",
			'it-it': "Iper Lariat",
			'es-es': "Hiperlazo",
			'pt-br': "Hiperlaço",
			'es-mx': "Hiperlazo"
		},

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, this attack does 100 more damage.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 100 danni in più.",
			'es-es': "Lanza 2 monedas. Si salen 2 caras, este ataque hace 100 puntos de daño más.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 100 pontos de dano a mais.",
			'es-mx': "Lanza 2 monedas. Si sale cara en ambas, este ataque hace 100 puntos de daño más."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851183,
				tcgplayer: 654451
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851183,
				tcgplayer: 654451
			}
		},
	],
}

export default card
