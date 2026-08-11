import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [538],
	set: Set,

	name: {
		'en-us': "Throh",
		'fr-fr': "Judokrak",
		'de-de': "Jiutesto",
		'it-it': "Throh",
		'pt-br': "Throh",
		'es-es': "Throh",
		'es-mx': "Throh"
	},

	illustrator: "GOSSAN",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Shoulder Throw",
			'fr-fr': "Projection Martiale",
			'de-de': "Schulterwurf",
			'it-it': "Lanciodorso",
			'pt-br': "Arremesso de Ombro",
			'es-es': "Llave de Hombro",
			'es-mx': "Proyección de Hombro"
		},

		effect: {
			'en-us': "This attack does 30 less damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 30 dégâts de moins pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte weniger zu.",
			'it-it': "Questo attacco infligge 30 danni in meno per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a menos para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			'es-es': "Este ataque hace 30 puntos de daño menos por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño menos por cada {C} en el Costo de Retirada del Pokémon Activo de tu rival."
		},

		damage: "120-"
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836172,
				tcgplayer: 642583
			}
		},
	]
}

export default card
