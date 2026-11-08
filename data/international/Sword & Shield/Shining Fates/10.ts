import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [781],
	set: Set,

	name: {
		'fr-fr': "Sinistrail VMAX",
		'en-us': "Dhelmise VMAX",
		'es-es': "Dhelmise VMAX",
		'it-it': "Dhelmise VMAX",
		'pt-br': "Dhelmise VMAX",
		'de-de': "Moruda VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Sinistrail-V",
		'en-us': "Dhelmise V"
	},

	attacks: [{
		name: {
			'fr-fr': "Chaîne Déchaînée",
			'en-us': "Swinging Chain",
			'es-es': "Cadena Oscilante",
			'it-it': "Oscillacatena",
			'pt-br': "Corrente Giratória",
			'de-de': "Schwingende Kette"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie Grass attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon for each Grass Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía Grass unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia Grass assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia Grass ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Grass-Energie 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Grass"]
	}, {
		name: {
			'fr-fr': "Ancromax",
			'en-us': "Max Anchor",
			'es-es': "Maxiancla",
			'it-it': "Dynancora",
			'pt-br': "Âncora Max",
			'de-de': "Dyna-Anker"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Ancromax.",
			'en-us': "During your next turn, this Pokémon can't use Max Anchor.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Maxiancla.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Dynancora.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Âncora Max.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Dyna-Anker nicht einsetzen."
		},

		damage: 240,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539073,
				tcgplayer: 232380
			}
		},
	],
}

export default card
