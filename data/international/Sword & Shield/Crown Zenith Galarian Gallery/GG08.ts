import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

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

	illustrator: "Mina Nakai",
	rarity: "Rare",
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
		cost: ["Lightning"],

		name: {
			'en-us': "Explosive Bolt",
			'fr-fr': "Foudre Explosive",
			'es-es': "Rayo Explosivo",
			'it-it': "Lampo Esplosivo",
			'pt-br': "Raio Explosivo",
			'de-de': "Explosiver Blitz"
		},

		effect: {
			'en-us': "If any of your Benched Magmortar have any damage counters on them, this attack does 90 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur l'un de vos Maganon de Banc, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Magmortar en Banca tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			'it-it': "Se uno qualsiasi dei tuoi Magmortar in panchina ha dei segnalini danno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se algum dos seus Magmortar no Banco tiver algum contador de dano nele, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn auf mindestens 1 Magbrant auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "High-Voltage Current",
			'fr-fr': "Courant Haute-Tension",
			'es-es': "Corriente de Alta Tensión",
			'it-it': "Corrente Folgorante",
			'pt-br': "Corrente de Alta Tensão",
			'de-de': "Hochspannungsstrom"
		},

		effect: {
			'en-us': "This attack does 50 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "The amount of electrical energy this Pokémon produces is proportional to the rate of its pulse. The voltage jumps while Electivire is battling.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691887,
				tcgplayer: 478025
			}
		},
	],
}

export default card
