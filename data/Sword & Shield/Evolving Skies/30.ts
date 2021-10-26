import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Vaporeon VMAX",
		fr: "Aquali VMAX",
		es: "Vaporeon VMAX",
		it: "Vaporeon VMAX",
		pt: "Vaporeon VMAX",
		de: "Aquana VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			en: "Bubble Pod",
			fr: "Bulle Capsule",
			es: "Cápsula Burbuja",
			it: "Bollacapsula",
			pt: "Bubble Pod",
			de: "Blubbkapsel"
		},

		effect: {
			en: "Put a Water Pokémon from your discard pile onto your Bench. If you do, attach up to 3 Water Energy cards from your discard pile to that Pokémon.",
			fr: "Placez un Pokémon Water de votre pile de défausse sur votre Banc. Dans ce cas, attachez jusqu'à 3 cartes Énergie Water de votre pile de défausse à ce Pokémon-là.",
			es: "Pon 1 Pokémon Water de tu pila de descartes en tu Banca. Si lo haces, une hasta 3 cartas de Energía Water de tu pila de descartes a ese Pokémon.",
			it: "Prendi un Pokémon Water dalla tua pila degli scarti e mettilo nella tua panchina. Se lo fai, assegna a quel Pokémon fino a tre carte Energia Water dalla tua pila degli scarti.",
			pt: "Put a Water Pokémon from your discard pile onto your Bench. If you do, attach up to 3 Water Energy cards from your discard pile to that Pokémon.",
			de: "Lege 1 Water-Pokémon aus deinem Ablagestapel auf deine Bank. Wenn du das machst, lege bis zu 3 Water-Energiekarten aus deinem Ablagestapel an jenes Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Max Torrent",
			fr: "Torrentomax",
			es: "Maxitorrente",
			it: "Dynacquaiuto",
			pt: "Max Torrent",
			de: "Dyna-Sturzbach"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 100 danni in più.",
			pt: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Vaporeon V",
		fr: "Aquali-V",
		es: "Vaporeon V",
		it: "Vaporeon-V",
		pt: "Vaporeon V",
		de: "Aquana-V"
	},

	dexId: [134],
	regulationMark: "E",

}

export default card
