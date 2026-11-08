import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [3],

	name: {
		'en-us': "Venusaur V",
		'fr-fr': "Florizarre V",
		'es-es': "Venusaur V",
		'it-it': "Venusaur V",
		'pt-br': "Venusaur V",
		'de-de': "Bisaflor V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Pollen Bomb",
				'fr-fr': "Bombe Pollen",
				'es-es': "Bomba de Polen",
				'it-it': "Bomba di Polline",
				'pt-br': "Bomba de Pólen",
				'de-de': "Pollenbombe"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
			},
			damage: 80,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Solar Typhoon",
				'fr-fr': "Typhon Solaire",
				'es-es': "Tifón Solar",
				'it-it': "Tifone Solare",
				'pt-br': "Tufão Solar",
				'de-de': "Solartaifun"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't use Solar Typhoon.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Solaire.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede usar Tifón Solar.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Tifone Solare.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Tufão Solar.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon Solartaifun nicht einsetzen."
			},
			damage: 220,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 499860,
		tcgplayer: 222990
	}
}

export default card
