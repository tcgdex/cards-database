import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		'en-us': "Noivern V",
		'fr-fr': "Bruyverne V",
		'de-de': "UHaFnir V",
		'es-es': "Noivern V",
		'pt-br': "Noivern V",
		'it-it': "Noivern V"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Promo",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Boomburst",
			'fr-fr': "Bang Sonique",
			'de-de': "Überschallknall",
			'es-es': "Estruendo",
			'pt-br': "Rajada Explosiva",
			'it-it': "Ondaboato"
		},

		effect: {
			'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			'en-us': "Synchro Loud",
			'fr-fr': "Synchro Sonore",
			'de-de': "Synchrokrach",
			'es-es': "Sincronización Ruidosa",
			'pt-br': "Estrondo Sincronizado",
			'it-it': "Sincrochiasso"
		},

		damage: "60+",

		effect: {
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 120 more damage.",
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 120 puntos de daño más.",
			'pt-br': "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 120 pontos de dano a mais.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 120 danni in più."
		}
	}],

	regulationMark: "E",
	suffix: "V",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	hp: 200,
	types: ["Dragon"],
	retreat: 0,

	thirdParty: {
		cardmarket: 576724
	}
}

export default card
