import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yamper",
		'fr-fr': "Voltoutou",
		'es-es': "Yamper",
		'es-mx': "Yamper",
		'de-de': "Voldi",
		'it-it': "Yamper",
		'pt-br': "Yamper"
	},

	rarity: "Illustration rare",
	category: "Pokemon",

	dexId: [835],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Play Rough",
			'fr-fr': "Câlinerie",
			'es-es': "Carantoña",
			'es-mx': "Juego Rudo",
			'de-de': "Knuddler",
			'it-it': "Carineria",
			'pt-br': "Jogo Duro"
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

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity.",
	},

	illustrator: "tono",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857674,
				tcgplayer: 662243,
				cardtrader: 356885
			}
		},
	],
}

export default card
