import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [169],
	set: Set,

	name: {
		fr: "Nostenfer VMAX",
		en: "Crobat VMAX",
		es: "Crobat VMAX",
		it: "Crobat VMAX",
		pt: "Crobat VMAX",
		de: "Iksbat VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 300,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Nostenfer-V",
		en: "Crobat V"
	},

	attacks: [{
		name: {
			fr: "Poison Évasif",
			en: "Stealth Poison",
			es: "Veneno Sigiloso",
			it: "Veleno Subdolo",
			pt: "Veneno Furtivo",
			de: "Tarngift"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			en: "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Scambia questo Pokémon con uno della tua panchina.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			fr: "Tranchomax",
			en: "Max Cutter",
			es: "Maxicorte",
			it: "Dynalama",
			pt: "Cortador Max",
			de: "Dyna-Schnitt"
		},

		damage: 180,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 539248
	}
}

export default card
