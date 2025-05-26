import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	stage: "VMAX",

	name: {
		en: "Crobat VMAX",
		fr: "Nostenfer VMAX",
		de: "Iksbat VMAX",
		es: "Crobat VMAX",
		pt: "Crobat VMAX",
		it: "Crobat VMAX"
	},

	rarity: "None",
	dexId: [169],
	hp: 300,
	types: ["Darkness"],

	evolveFrom: {
		en: "Crobat V",
		fr: "Nostenfer-V",
		de: "Iksbat-V",
		es: "Crobat V",
		pt: "Crobat V",
		it: "Crobat-V"
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Stealth Poison",
			fr: "Poison Évasif",
			de: "Tarngift",
			es: "Veneno Sigiloso",
			pt: "Veneno Furtivo",
			it: "Veleno Subdolo"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Scambia questo Pokémon con uno della tua panchina."
		},

		damage: 70
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Max Cutter",
			fr: "Tranchomax",
			de: "Dyna-Schnitt",
			es: "Maxicorte",
			pt: "Cortador Max",
			it: "Dynalama"
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

	regulationMark: "D"
}

export default card
