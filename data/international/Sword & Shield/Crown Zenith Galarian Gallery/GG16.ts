import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [359],
	set: Set,

	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Swirling Disaster",
			'fr-fr': "Désastre Tourbillonnant",
			'es-es': "Catástrofe en Espiral",
			'it-it': "Turbine Catastrofico",
			'pt-br': "Turbilhão do Desastre",
			'de-de': "Wirbelndes Desaster"
		},

		effect: {
			'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Claw Rend",
			'fr-fr': "Déchirure",
			'es-es': "Quebrantar",
			'it-it': "Artiglilaceranti",
			'pt-br': "Lacerar",
			'de-de': "Klauenreißer"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 70 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 70 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 70 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Swift as the wind, Absol races through fields and mountains. Its curved, bow-like horn is acutely sensitive to the warning signs of natural disasters.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691895,
				tcgplayer: 478034
			}
		},
	],
}

export default card
