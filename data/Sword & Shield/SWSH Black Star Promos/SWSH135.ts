import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		en: "Zacian",
		fr: "Zacian",
		de: "Zacian",
		es: "Zacian",
		pt: "Zacian",
		it: "Zacian"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	stage: "BREAK",

	abilities: [{
		type: "Poke-BODY",

		name: {
			en: "Bladed Armament"
		},

		effect: {
			en: "Damage from this Pokémon's attacks isn't affected by any effects on your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Brave Blade",
			fr: "Lame Vaillante",
			de: "Couragierte Klinge",
			es: "Cuchilla Osada",
			pt: "Lâmina Valente",
			it: "Baldalama"
		},

		damage: 240,

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 160,
	types: ["Metal"],
	retreat: 2,

	thirdParty: {
		cardmarket: 465529
	}
}

export default card