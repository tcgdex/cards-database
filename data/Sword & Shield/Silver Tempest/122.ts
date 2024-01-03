import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		es: "Ferrothorn",
		it: "Ferrothorn",
		pt: "Ferrothorn",
		de: "Tentantel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
		es: "Ferroseed",
		it: "Ferroseed",
		pt: "Ferroseed",
		de: "Kastadur"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Whip Smash",
			fr: "Frappe Fouet",
			es: "Golpe Látigo",
			it: "Frustata Devastante",
			pt: "Chicote Esmagador",
			de: "Peitschenschlag"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card