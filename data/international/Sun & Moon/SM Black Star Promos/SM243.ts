import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [486],
	set: Set,

	name: {
		'en-us': "Regigigas",
		'fr-fr': "Regigigas",
		'es-es': "Regigigas",
		'it-it': "Regigigas",
		'pt-br': "Regigigas",
		'de-de': "Regigigas"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Regiblast",
			'fr-fr': "Regi-Explosion",
			'es-es': "Regiexplosión",
			'it-it': "Bomba Regi",
			'pt-br': "Regexplosão",
			'de-de': "Registoß"
		},

		damage: 180,

		effect: {
			'en-us': "Discard the top card of your opponent’s deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a primeira carta do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Fighting", "Metal", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,

	description: {
		'en-us': "It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma.",
	},
}

export default card
