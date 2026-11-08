import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'de-de': "Ottaro",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'es-es': "Oshawott",
		'es-mx': "Oshawott"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [501],

	attacks: [{
		cost: ["Water", "Colorless"],

			name: {
				'en-us': "Razor Shell",
				'fr-fr': "Coquilame",
				'es-es': "Concha Filo",
				'it-it': "Conchilama",
				'pt-br': "Concha Navalha",
				'de-de': "Kalkklinge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "j",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886620,
				tcgplayer: 699875
			}
		},
	],
}

export default card
