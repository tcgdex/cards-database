import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Toxtricity V",
		'fr-fr': "Salarsen V",
		'es-es': "Toxtricity V",
		'it-it': "Toxtricity V",
		'pt-br': "Toxtricity V",
		'de-de': "Riffex V"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Energize",
			'fr-fr': "Énergisant",
			'es-es': "Vigorizar",
			'it-it': "Energizza",
			'pt-br': "Energizar",
			'de-de': "Energiezufuhr"
		},

		effect: {
			'en-us': "Attach a {L} Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie {L} de votre pile de défausse à ce Pokémon.",
			'es-es': "Une 1 carta de Energía {L} de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia {L} dalla tua pila degli scarti.",
			'pt-br': "Ligue 1 carta de Energia {L} da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 {L}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Venom Slap",
			'fr-fr': "Gifle Envenimée",
			'es-es': "Bofetón Venenoso",
			'it-it': "Velensberla",
			'pt-br': "Tapão Venenoso",
			'de-de': "Gifttreffer"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [849],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 450873
	}
}

export default card
