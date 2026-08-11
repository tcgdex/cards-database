import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Raikou",
		'fr-fr': "Raikou",
		'de-de': "Raikou",
		'it-it': "Raikou",
		'es-es': "Raikou",
		'pt-br': "Raikou",
		'es-mx': "Raikou"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [243],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Electro Fall",
			'fr-fr': "Chute Électro",
			'de-de': "Elektrofall",
			'it-it': "Elettrocaduta",
			'es-es': "Cascada Eléctrica",
			'pt-br': "Queda Elétrica",
			'es-mx': "Declive Eléctrico"
		},

		effect: {
			'en-us': "If you have at least 4 {L} Energy in play, this attack does 90 more damage.",
			'fr-fr': "Si vous avez au moins 4 Énergies {L} en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			'de-de': "Wenn du mindestens 4 {L}-Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se hai almeno quattro Energie {L} in gioco, questo attacco infligge 90 danni in più.",
			'es-es': "Si tienes por lo menos 4 Energías {L} en juego, este ataque hace 90 puntos de daño más.",
			'pt-br': "Se você tiver pelo menos 4 Energias {L} em jogo, este ataque causará 90 pontos de dano a mais.",
			'es-mx': "Si tienes al menos 4 Energías {L} en juego, este ataque hace 90 puntos de daño más."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851119,
				tcgplayer: 654387
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851119,
				tcgplayer: 654387
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 867790,
			}
		},
	],
}

export default card
