import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Grapploct",
		fr: "Krakos",
		es: "Grapploct",
		it: "Grapploct",
		pt: "Grapploct",
		de: "Kaocto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Chop",
			fr: "Coup Tranchant",
			es: "Cortar",
			it: "Ceffone",
			pt: "Trincar",
			de: "Hacker"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Raging Tentacles",
			fr: "Tentacules Furieux",
			es: "Tentáculos Iracundos",
			it: "Tentacoli Furiosi",
			pt: "Tentáculos Violentos",
			de: "Wütende Tentakel"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack can be used for Fighting.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque peut être utilisée pour Fighting.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por Fighting.",
			it: "Se questo Pokémon ha dei segnalini danno, il costo di questo attacco è Fighting.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque poderá ser usado por Fighting.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, kann diese Attacke für Fighting eingesetzt werden."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card