import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta VSTAR",
		fr: "Zamazenta VSTAR",
		es: "Zamazenta V-ASTRO",
		it: "Zamazenta V ASTRO",
		pt: "Zamazenta V-ASTRO",
		de: "Zamazenta VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],

	evolveFrom: {
		en: "Zamazenta V",
		fr: "Zamazenta-V",
		es: "Zamazenta V",
		it: "Zamazenta-V",
		pt: "Zamazenta V",
		de: "Zamazenta-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
			es: "Gigaimpacto",
			it: "Gigaimpatto",
			pt: "Gigaimpacto",
			de: "Gigastoß"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
