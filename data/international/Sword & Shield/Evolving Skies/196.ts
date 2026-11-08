import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Noivern V",
		'fr-fr': "Bruyverne V",
		'es-es': "Noivern V",
		'it-it': "Noivern V",
		'pt-br': "Noivern V",
		'de-de': "UHaFnir V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Mitsuhiro Arita",

	attacks: [{
		name: {
			'en-us': "Boomburst",
			'fr-fr': "Bang Sonique",
			'es-es': "Estruendo",
			'it-it': "Ondaboato",
			'pt-br': "Boomburst",
			'de-de': "Überschallknall"
		},

		effect: {
			'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Synchro Loud",
			'fr-fr': "Synchro Sonore",
			'es-es': "Sincronización Ruidosa",
			'it-it': "Sincrochiasso",
			'pt-br': "Synchro Loud",
			'de-de': "Synchrokrach"
		},

		effect: {
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 120 more damage.",
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 120 puntos de daño más.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 120 danni in più.",
			'pt-br': "If you have the same number of cards in your hand as your opponent, this attack does 120 more damage.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Psychic", "Darkness"]
	}],

	retreat: 0,
	dexId: [715],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574254,
				tcgplayer: 246745
			}
		},
	],
}

export default card
