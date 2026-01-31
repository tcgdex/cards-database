import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Yamper",
		fr: "Voltoutou",
		es: "Yamper",
		'es-mx': "Yamper",
		de: "Voldi",
		it: "Yamper",
		pt: "Yamper"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [835],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Play Rough",
			fr: "Câlinerie",
			es: "Carantoña",
			'es-mx': "Juego Rudo",
			de: "Knuddler",
			it: "Carineria",
			pt: "Jogo Duro"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		cardmarket: 857674,
		tcgplayer: 662243
	}
}

export default card