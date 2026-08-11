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

	illustrator: "Mina Nakai",
	rarity: "Illustration rare",
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
		type: "holo",
		thirdParty: {
			cardmarket: 836116,
			tcgplayer: 642223
		}
	},
],
}

export default card
