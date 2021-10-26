import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Venusaur V",
		fr: "Florizarre V",
		es: "Venusaur V",
		it: "Venusaur V",
		pt: "Venusaur V",
		de: "Bisaflor V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
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
				en: "Pollen Bomb",
				fr: "Bombe Pollen",
				es: "Bomba de Polen",
				it: "Bomba di Polline",
				pt: "Bomba de Pólen",
				de: "Pollenbombe"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
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
				en: "Solar Typhoon",
				fr: "Typhon Solaire",
				es: "Tifón Solar",
				it: "Tifone Solare",
				pt: "Tufão Solar",
				de: "Solartaifun"
			},
			effect: {
				en: "During your next turn, this Pokémon can't use Solar Typhoon.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Solaire.",
				es: "Durante tu próximo turno, este Pokémon no puede usar Tifón Solar.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Tifone Solare.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá usar Tufão Solar.",
				de: "Während deines nächsten Zuges kann dieses Pokémon Solartaifun nicht einsetzen."
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
	suffix: "V"
}

export default card
