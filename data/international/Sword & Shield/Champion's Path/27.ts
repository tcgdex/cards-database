import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Lucario V",
		'fr-fr': "Lucario V",
		'es-es': "Lucario V",
		'it-it': "Lucario V",
		'pt-br': "Lucario V",
		'de-de': "Lucario V"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [448],
	set: Set,
	hp: 210,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Aura Sphere",
				'fr-fr': "Aurasphère",
				'es-es': "Esfera Aural",
				'it-it': "Forzasfera",
				'pt-br': "Aura Esférica",
				'de-de': "Aurasphäre"
			},
			effect: {
				'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Beatdown Smash",
				'fr-fr': "Dérouillée Fracassante",
				'es-es': "Golpe Aplastante",
				'it-it': "Batosta Devastante",
				'pt-br': "Surra Esmagadora",
				'de-de': "Niederprügelnder Schlag"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't use Beatdown Smash.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Dérouillée Fracassante.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Aplastante.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Batosta Devastante.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Surra Esmagadora.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon Niederprügelnder Schlag nicht einsetzen."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 499990,
		tcgplayer: 222330
	}
}

export default card
