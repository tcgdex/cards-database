import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [466],
	set: Set,

	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Short-Circuit Knuckle",
			'fr-fr': "Poing Court-Circuit",
			'es-es': "Nudillo Cortocircuito",
			'it-it': "Pugno Cortocircuito",
			'pt-br': "Punho Curto-circuito",
			'de-de': "Kurzschlussfaust"
		},

		effect: {
			'en-us': "If your opponent has any {W} Pokémon in play, this attack does 120 more damage.",
			'fr-fr': "Si votre adversaire a au moins un Pokémon {W} en jeu, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si tu rival tiene algún Pokémon {W} en juego, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il tuo avversario ha dei Pokémon {W} in gioco, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o seu oponente tiver algum Pokémon {W} em jogo, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner mindestens 1 {W}-Pokémon im Spiel hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Electroslug",
			'fr-fr': "Électro Frappe",
			'es-es': "Electropuñetazo",
			'it-it': "Elettropugno",
			'pt-br': "Soco Elétrico",
			'de-de': "Elektroschuss"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "The amount of electrical energy this Pokémon produces is proportional to the rate of its pulse. The voltage jumps while Electivire is battling.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760684,
				tcgplayer: 542798
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760684,
				tcgplayer: 542798
			}
		},
	],

	illustrator: "Yuya Oka",

}

export default card