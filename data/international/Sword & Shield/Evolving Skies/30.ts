import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Vaporeon VMAX",
		'fr-fr': "Aquali VMAX",
		'es-es': "Vaporeon VMAX",
		'it-it': "Vaporeon VMAX",
		'pt-br': "Vaporeon VMAX",
		'de-de': "Aquana VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			'en-us': "Bubble Pod",
			'fr-fr': "Bulle Capsule",
			'es-es': "Cápsula Burbuja",
			'it-it': "Bollacapsula",
			'pt-br': "Bubble Pod",
			'de-de': "Blubbkapsel"
		},

		effect: {
			'en-us': "Put a Water Pokémon from your discard pile onto your Bench. If you do, attach up to 3 Water Energy cards from your discard pile to that Pokémon.",
			'fr-fr': "Placez un Pokémon Water de votre pile de défausse sur votre Banc. Dans ce cas, attachez jusqu'à 3 cartes Énergie Water de votre pile de défausse à ce Pokémon-là.",
			'es-es': "Pon 1 Pokémon Water de tu pila de descartes en tu Banca. Si lo haces, une hasta 3 cartas de Energía Water de tu pila de descartes a ese Pokémon.",
			'it-it': "Prendi un Pokémon Water dalla tua pila degli scarti e mettilo nella tua panchina. Se lo fai, assegna a quel Pokémon fino a tre carte Energia Water dalla tua pila degli scarti.",
			'pt-br': "Put a Water Pokémon from your discard pile onto your Bench. If you do, attach up to 3 Water Energy cards from your discard pile to that Pokémon.",
			'de-de': "Lege 1 Water-Pokémon aus deinem Ablagestapel auf deine Bank. Wenn du das machst, lege bis zu 3 Water-Energiekarten aus deinem Ablagestapel an jenes Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Max Torrent",
			'fr-fr': "Torrentomax",
			'es-es': "Maxitorrente",
			'it-it': "Dynacquaiuto",
			'pt-br': "Max Torrent",
			'de-de': "Dyna-Sturzbach"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 100 danni in più.",
			'pt-br': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
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
		'en-us': "Vaporeon V",
		'fr-fr': "Aquali-V",
		'es-es': "Vaporeon V",
		'it-it': "Vaporeon-V",
		'pt-br': "Vaporeon V",
		'de-de': "Aquana-V"
	},

	dexId: [134],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574054,
				tcgplayer: 246736
			}
		},
	],
}

export default card
