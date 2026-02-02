import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [563],
	set: Set,

	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
		de: "Echnatoll",
		it: "Cofagrigus",
		pt: "Cofagrigus",
		es: "Cofagrigus",
		'es-mx': "Cofagrigus"
	},

	illustrator: "Haru Akasaka",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
		de: "Makabaja",
		it: "Yamask",
		pt: "Yamask",
		es: "Yamask",
		'es-mx': "Yamask"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Extended Damagriiigus",
			fr: "Tutankarnage Étendu",
			de: "Überlieferndes Schadtoll",
			it: "Dannogrigus Esteso",
			pt: "Danogrigus Ampliado",
			es: "Dañogrigus Amplificado",
			'es-mx': "Dañogrigus Extendido"
		},

		effect: {
			en: "Move all damage counters from 1 of your Benched Pokémon to 1 of your opponent's Pokémon.",
			fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers l'un des Pokémon de votre adversaire.",
			de: "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf 1 Pokémon deines Gegners.",
			it: "Sposta tutti i segnalini danno da uno dei tuoi Pokémon in panchina a uno dei Pokémon del tuo avversario.",
			pt: "Mova todos os contadores de dano de 1 dos seus Pokémon no Banco para 1 dos Pokémon do seu oponente.",
			es: "Mueve todos los contadores de daño de uno de tus Pokémon en Banca a uno de los Pokémon de tu rival.",
			'es-mx': "Mueve todos los contadores de daño de 1 de tus Pokémon en Banca a 1 de los Pokémon de tu rival."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Perplex",
			fr: "Affolement",
			de: "Perplex",
			it: "Sconcerto",
			pt: "Perplexo",
			es: "Desconcierto",
			'es-mx': "Desconcierto"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836138
	}
}

export default card