import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Souichirou Gunjima",
	category: "Pokemon",

	description: {
		'en-us': "On the night of a full moon, or when it gets excited, the ring patterns on its body glow yellow."
	},

	stage: "Stage1",

	name: {
		'en-us': "Umbreon",
		'fr-fr': "Noctali",
		'de-de': "Nachtara",
		'es-es': "Umbreon",
		'pt-br': "Umbreon",
		'it-it': "Umbreon"
	},

	rarity: "Promo",
	dexId: [197],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee"
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Blindside",
			'fr-fr': "Angle Mort",
			'de-de': "Aus heiterem Himmel",
			'es-es': "Lado Ciego",
			'pt-br': "Ponto Cego",
			'it-it': "Latocieco"
		},

		effect: {
			'en-us': "This attack does 60 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente que tiver algum contador de dano nele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Moon Mirage",
			'fr-fr': "Mirage Lunaire",
			'de-de': "Mondillusion",
			'es-es': "Espejismo Lunar",
			'pt-br': "Miragem Lunar",
			'it-it': "Miraggio Lunare"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso."
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 568801
	}
}

export default card
