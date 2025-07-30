import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [638],
	set: Set,

	name: {
		en: "Cobalion",
		fr: "Cobaltium",
		es: "Cobalion",
		it: "Cobalion",
		pt: "Cobalion",
		de: "Kobalium"
	},

	illustrator: "Kazuma Koda",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Headbang",
			fr: "Frappe de Tête",
			es: "Cabecear",
			it: "Scuotitesta",
			pt: "Baque de Cabeça",
			de: "Headbangen"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			en: "Metal Slash",
			fr: "Tranche Métallique",
			es: "Tajo Metálico",
			it: "Lacerametallo",
			pt: "Talho de Metal",
			de: "Metallschlitzer"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It has a body and heart of steel. It worked with its allies to punish people when they hurt Pokémon."
	},

	thirdParty: {
		cardmarket: 567222
	}
}

export default card
