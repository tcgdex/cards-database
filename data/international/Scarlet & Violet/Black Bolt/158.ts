import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [644],
	set: Set,

	name: {
		'en-us': "Zekrom ex",
		'fr-fr': "Zekrom-ex",
		'de-de': "Zekrom-ex",
		'it-it': "Zekrom-ex",
		'pt-br': "Zekrom ex",
		'es-es': "Zekrom ex",
		'es-mx': "Zekrom ex"
	},

	suffix: "ex",
	illustrator: "takuyoa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'de-de': "Schlitzer",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'es-es': "Cuchillada",
			'es-mx': "Cuchillada"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Voltage Burst",
			'fr-fr': "Explosion Voltaïque",
			'de-de': "Starkstrom-Ausbruch",
			'it-it': "Scoppiovoltaggio",
			'pt-br': "Explosão Voltaica",
			'es-es': "Explosión Voltaje",
			'es-mx': "Estallido Voltaico"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Prize card your opponent has taken. This Pokémon also does 30 damage to itself.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée. Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 50 Schadenspunkte mehr zu. Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni carta Premio presa dal tuo avversario. Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou. Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya cogido tu rival. Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya tomado tu rival. Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: "130+"
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836232,
				tcgplayer: 642610
			}
		},
	]
}

export default card
