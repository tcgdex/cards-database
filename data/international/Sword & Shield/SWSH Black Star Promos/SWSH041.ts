import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'es-es': "Flareon",
		'pt-br': "Flareon",
		'de-de': "Flamara",
		'it-it': "Flareon"
	},

	illustrator: "You Iribi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee"
	},

	attacks: [{
		name: {
			'en-us': "Singe",
			'fr-fr': "Roussi",
			'es-es': "Quemadura",
			'pt-br': "Chamuscada",
			'de-de': "Versengung",
			'it-it': "Scottata"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato."
		},

		cost: ["Fire"]
	}, {
		name: {
			'en-us': "Kindle",
			'fr-fr': "Enflammer",
			'es-es': "Encendido",
			'pt-br': "Inflamar",
			'de-de': "Anzünden",
			'it-it': "Infiammare"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Descarte 1 Energia deste Pokémon. Se fizer isto, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon. Se lo fai, scarta un'Energia dal Pokémon attivo del tuo avversario."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "Once it has stored up enough heat, this Pokémon's body temperature can reach up to 1,700 degrees Fahrenheit."
	},

	stage: "Stage1",
	dexId: [136],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 491199
	}
}

export default card
