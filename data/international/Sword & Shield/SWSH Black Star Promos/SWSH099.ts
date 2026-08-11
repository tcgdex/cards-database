import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	stage: "VMAX",

	name: {
		'en-us': "Crobat VMAX",
		'fr-fr': "Nostenfer VMAX",
		'de-de': "Iksbat VMAX",
		'es-es': "Crobat VMAX",
		'pt-br': "Crobat VMAX",
		'it-it': "Crobat VMAX"
	},

	rarity: "Promo",
	dexId: [169],
	hp: 300,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Crobat V",
		'fr-fr': "Nostenfer-V",
		'de-de': "Iksbat-V",
		'es-es': "Crobat V",
		'pt-br': "Crobat V",
		'it-it': "Crobat-V"
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Stealth Poison",
			'fr-fr': "Poison Évasif",
			'de-de': "Tarngift",
			'es-es': "Veneno Sigiloso",
			'pt-br': "Veneno Furtivo",
			'it-it': "Veleno Subdolo"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Scambia questo Pokémon con uno della tua panchina."
		},

		damage: 70
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Max Cutter",
			'fr-fr': "Tranchomax",
			'de-de': "Dyna-Schnitt",
			'es-es': "Maxicorte",
			'pt-br': "Cortador Max",
			'it-it': "Dynalama"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 549401
	}
}

export default card
