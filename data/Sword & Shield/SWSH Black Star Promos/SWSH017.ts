import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity V",
		fr: "Salarsen V",
		es: "Toxtricity V",
		it: "Toxtricity V",
		pt: "Toxtricity V",
		de: "Riffex V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Energize",
			fr: "Énergisant",
			es: "Vigorizar",
			it: "Energizza",
			pt: "Energize",
			de: "Energiezufuhr"
		},

		effect: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
			es: "Une 1 carta de Energía Lightning de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia Lightning dalla tua pila degli scarti.",
			pt: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			de: "Lege 1 Lightning-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Venom Slap",
			fr: "Gifle Envenimée",
			es: "Bofetón Venenoso",
			it: "Velensberla",
			pt: "Venom Slap",
			de: "Gifttreffer"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "Your opponent’s Active Pokémon is now Poisoned.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
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
	suffix: "V",
	dexId: [849],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card