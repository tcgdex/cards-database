import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [506],
	set: Set,

	name: {
		'en-us': "Lillipup",
		'fr-fr': "Ponchiot",
		'de-de': "Yorkleff",
		'it-it': "Lillipup",
		'pt-br': "Lillipup",
		'es-es': "Lillipup",
		'es-mx': "Lillipup"
	},

	illustrator: "Narumi Sato",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Play Rough",
			'fr-fr': "Câlinerie",
			'de-de': "Knuddler",
			'it-it': "Carineria",
			'pt-br': "Jogo Duro",
			'es-es': "Carantoña",
			'es-mx': "Juego Rudo"
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

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836189,
			tcgplayer: 642268
		}
	},
],
}

export default card
