import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [563],
	set: Set,

	name: {
		'en-us': "Cofagrigus",
		'fr-fr': "Tutankafer",
		'de-de': "Echnatoll",
		'it-it': "Cofagrigus",
		'pt-br': "Cofagrigus",
		'es-es': "Cofagrigus",
		'es-mx': "Cofagrigus"
	},

	illustrator: "Bun Toujo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'de-de': "Makabaja",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'es-es': "Yamask",
		'es-mx': "Yamask"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Extended Damagriiigus",
			'fr-fr': "Tutankarnage Étendu",
			'de-de': "Überlieferndes Schadtoll",
			'it-it': "Dannogrigus Esteso",
			'pt-br': "Danogrigus Ampliado",
			'es-es': "Dañogrigus Amplificado",
			'es-mx': "Dañogrigus Extendido"
		},

		effect: {
			'en-us': "Move all damage counters from 1 of your Benched Pokémon to 1 of your opponent's Pokémon.",
			'fr-fr': "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers l'un des Pokémon de votre adversaire.",
			'de-de': "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf 1 Pokémon deines Gegners.",
			'it-it': "Sposta tutti i segnalini danno da uno dei tuoi Pokémon in panchina a uno dei Pokémon del tuo avversario.",
			'pt-br': "Mova todos os contadores de dano de 1 dos seus Pokémon no Banco para 1 dos Pokémon do seu oponente.",
			'es-es': "Mueve todos los contadores de daño de uno de tus Pokémon en Banca a uno de los Pokémon de tu rival.",
			'es-mx': "Mueve todos los contadores de daño de 1 de tus Pokémon en Banca a 1 de los Pokémon de tu rival."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Perplex",
			'fr-fr': "Affolement",
			'de-de': "Perplex",
			'it-it': "Sconcerto",
			'pt-br': "Perplexo",
			'es-es': "Desconcierto",
			'es-mx': "Desconcierto"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 835975,
				tcgplayer: 642152
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836565,
				tcgplayer: 642395
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836566,
				tcgplayer: 642323
			}
		},
	],
}

export default card
