import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		'en-us': "It is strong despite its compact size. It can easily pick up and carry an adult human on its back."
	},

	stage: "Basic",

	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'de-de': "Phanpy",
		'es-es': "Phanpy",
		'pt-br': "Phanpy",
		'it-it': "Phanpy"
	},

	rarity: "Promo",
	dexId: [231],
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'de-de': "Zertrampeln",
			'es-es': "Estampida",
			'pt-br': "Estouro",
			'it-it': "Fuggi Fuggi"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Strike Back",
			'fr-fr': "Vengeur",
			'de-de': "Kontern",
			'es-es': "Contraimpacto",
			'pt-br': "Revidar",
			'it-it': "Risposta"
		},

		effect: {
			'en-us': "This attack does 30 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte zu.",
			'es-es': "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon.",
			'it-it': "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 557974
	}
}

export default card
