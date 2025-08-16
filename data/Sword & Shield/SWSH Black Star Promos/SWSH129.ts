import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Souichirou Gunjima",
	category: "Pokemon",

	description: {
		en: "On the night of a full moon, or when it gets excited, the ring patterns on its body glow yellow."
	},

	stage: "Stage1",

	name: {
		en: "Umbreon",
		fr: "Noctali",
		de: "Nachtara",
		es: "Umbreon",
		pt: "Umbreon",
		it: "Umbreon"
	},

	rarity: "None",
	dexId: [197],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		pt: "Eevee",
		it: "Eevee"
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Blindside",
			fr: "Angle Mort",
			de: "Aus heiterem Himmel",
			es: "Lado Ciego",
			pt: "Ponto Cego",
			it: "Latocieco"
		},

		effect: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente que tiver algum contador de dano nele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Moon Mirage",
			fr: "Mirage Lunaire",
			de: "Mondillusion",
			es: "Espejismo Lunar",
			pt: "Miragem Lunar",
			it: "Miraggio Lunare"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			it: "Il Pokémon attivo del tuo avversario viene confuso."
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
