import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'es-es': "Entei",
		'es-mx': "Entei",
		'de-de': "Entei",
		'it-it': "Entei",
		'pt-br': "Entei"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [244],
	hp: 140,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Flare Fall",
			'fr-fr': "Cascade Flamboyante",
			'es-es': "Cascada Abrasadora",
			'es-mx': "Declive Ardiente",
			'de-de': "Flammenfall",
			'it-it': "Fuococaduta",
			'pt-br': "Queda Ígnea"
		},

		effect: {
			'en-us': "If you have at least 4 {R} Energy in play, this attack does 90 more damage.",
			'fr-fr': "Si vous avez au moins 4 Énergies {R} en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si tienes por lo menos 4 Energías {R} en juego, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si tienes al menos 4 Energías {R} en juego, este ataque hace 90 puntos de daño más.",
			'de-de': "Wenn du mindestens 4 {R}-Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se hai almeno quattro Energie {R} in gioco, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você tiver pelo menos 4 Energias {R} em jogo, este ataque causará 90 pontos de dano a mais."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "A Pokémon that races across the land. It is said that one is born every time a new volcano appears.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869636,
			tcgplayer: 675837
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870178,
			tcgplayer: 676873
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870177,
			tcgplayer: 677013
		}
	},
],
}

export default card
