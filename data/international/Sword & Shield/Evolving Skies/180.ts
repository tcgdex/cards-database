import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Espeon V",
		'fr-fr': "Mentali V",
		'es-es': "Espeon V",
		'it-it': "Espeon V",
		'pt-br': "Espeon V",
		'de-de': "Psiana V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "sowsow",

	attacks: [{
		name: {
			'en-us': "Zen Shot",
			'fr-fr': "Tir Zen",
			'es-es': "Disparo Zen",
			'it-it': "Colpo Zen",
			'pt-br': "Zen Shot",
			'de-de': "Zen-Schuss"
		},

		effect: {
			'en-us': "This attack does 60 damage to 1 of your opponent's Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon-V de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 60 puntos de daño a 1 de los Pokémon V de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon-V del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "This attack does 60 damage to 1 of your opponent's Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'de-de': "Diese Attacke fügt 1 Pokémon-V deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super Psy Bolt",
			'de-de': "Super-Psischlag"
		},

		damage: 120,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [196],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574238,
				tcgplayer: 246689
			}
		},
	],
}

export default card
