import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		'fr-fr': "Phyllali VSTAR",
		'de-de': "Folipurba VSTAR",
		'es-es': "Leafeon V-ASTRO",
		'pt-br': "Leafeon V-ASTRO",
		'it-it': "Leafeon V ASTRO",
		'en-us': "Leafeon VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Phyllali-V",
		'de-de': "Folipurba-V",
		'es-es': "Leafeon V",
		'pt-br': "Leafeon V",
		'it-it': "Leafeon-V",
		'en-us': "Leafeon V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

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

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 604997
	}
}

export default card
