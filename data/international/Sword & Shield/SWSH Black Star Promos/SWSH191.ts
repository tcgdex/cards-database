import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		'fr-fr': "Phyllali",
		'de-de': "Folipurba",
		'es-es': "Leafeon",
		'pt-br': "Leafeon",
		'it-it': "Leafeon",
		'en-us': "Leafeon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'en-us': "Eevee"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Feuille Garde",
			'de-de': "Floraschild",
			'es-es': "Defensa Hoja",
			'pt-br': "Guarda Folha",
			'it-it': "Fogliamanto",
			'en-us': "Leaf Guard"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Nœud Herbe",
			'de-de': "Strauchler",
			'es-es': "Hierba Lazo",
			'pt-br': "Nó de Grama",
			'it-it': "Laccioerboso",
			'en-us': "Grass Knot"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'en-us': "This attack does 30 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "This Pokémon's tail is blade sharp, with a fantastic cutting edge that can slice right though large trees."
	},

	thirdParty: {
		cardmarket: 604996
	}
}

export default card
