import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Paldean Tauros",
		'fr-fr': "Tauros de Paldea",
		'es-es': "Tauros de Paldea",
		'es-mx': "Tauros de Paldea",
		'de-de': "Paldea-Tauros",
		'it-it': "Tauros di Paldea",
		'pt-br': "Tauros de Paldea"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [128],
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Raging Charge",
			'fr-fr': "Charge Enragée",
			'es-es': "Carga Furiosa",
			'es-mx': "Carga Iracunda",
			'de-de': "Wütender Ansturm",
			'it-it': "Carica Furiosa",
			'pt-br': "Estouro Enfezado"
		},

		effect: {
			'en-us': "This attack does 40 damage for each of your Pokémon that has \"Tauros\" in its name that has any damage counters on it.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon ayant \" Tauros \" dans leur nom et ayant au moins un marqueur de dégâts.",
			'es-es': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon que tengan \"Tauros\" en su nombre y algún contador de daño sobre ellos.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon que tengan \"Tauros\" en su nombre y algún contador de daño sobre ellos.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon, bei dem \"Tauros\" zum Namen gehört und auf dem mindestens 1 Schadensmarke liegt, 40 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 40 danni per ciascuno dei tuoi Pokémon che ha sia \"Tauros\" nel nome che dei segnalini danno.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon que tem \"Tauros\" em seu nome que tiver algum contador de dano nele."
		},

		damage: "40×"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Double-Edge",
			'fr-fr': "Damoclès",
			'es-es': "Doble Filo",
			'es-mx': "Doble Filo",
			'de-de': "Risikotackle",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "This Pokémon has a muscular body and excels at close-quarters combat. It uses its short horns to strike the opponent's weak spots.",
	},

	illustrator: "Souichirou Gunjima",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857623,
				tcgplayer: 662208,
				cardtrader: 356831
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857623,
				tcgplayer: 662208,
				cardtrader: 356831
			}
		},
	],
}

export default card
