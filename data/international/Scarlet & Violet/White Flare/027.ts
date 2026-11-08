import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [582],
	set: Set,

	name: {
		'en-us': "Vanillite",
		'fr-fr': "Sorbébé",
		'de-de': "Gelatini",
		'it-it': "Vanillite",
		'pt-br': "Vanillite",
		'es-es': "Vanillite",
		'es-mx': "Vanillite"
	},

	illustrator: "cochi8i",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'de-de': "Verprügler",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'es-es': "Toque",
			'es-mx': "Golpeteo"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Ice Edge",
			'fr-fr': "Lame de Givre",
			'de-de': "Eisiger Abgrund",
			'it-it': "Fendighiaccio",
			'pt-br': "Gume de Gelo",
			'es-es': "Hielo Afilado",
			'es-mx': "Filo Gélido"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835956,
				tcgplayer: 642139
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835956,
				tcgplayer: 642139
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836541,
				tcgplayer: 642383
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836542,
				tcgplayer: 642311
			}
		},
	],
}

export default card
