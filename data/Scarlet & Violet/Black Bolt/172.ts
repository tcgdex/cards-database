import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [644],
	set: Set,

	name: {
		en: "Zekrom ex",
		fr: "Zekrom-ex",
		de: "Zekrom-ex",
		it: "Zekrom-ex",
		pt: "Zekrom ex",
		es: "Zekrom ex",
		'es-mx': "Zekrom ex"
	},

	rarity: "Black White Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			it: "Lacerazione",
			pt: "Talho",
			es: "Cuchillada",
			'es-mx': "Cuchillada"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Voltage Burst",
			fr: "Explosion Voltaïque",
			de: "Starkstrom-Ausbruch",
			it: "Scoppiovoltaggio",
			pt: "Explosão Voltaica",
			es: "Explosión Voltaje",
			'es-mx': "Estallido Voltaico"
		},

		effect: {
			en: "This attack does 50 more damage for each Prize card your opponent has taken. This Pokémon also does 30 damage to itself.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée. Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 50 Schadenspunkte mehr zu. Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 50 danni in più per ogni carta Premio presa dal tuo avversario. Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou. Este Pokémon também causa 30 pontos de dano a si mesmo.",
			es: "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya cogido tu rival. Este Pokémon también se hace 30 puntos de daño a sí mismo.",
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
				cardmarket: 836246
			}
		},
	]
}

export default card
