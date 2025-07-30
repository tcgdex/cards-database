import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Pyroar",
		fr: "Némélios",
		es: "Pyroar",
		pt: "Pyroar",
		it: "Pyroar",
		de: "Pyroleo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Fire Mane",
			fr: "Crinière de Feu",
			es: "Crin de Fuego",
			pt: "Crina de Fogo",
			it: "Criniera di Fuoco",
			de: "Flammenmähne"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flame Tackle",
			fr: "Charge Calcinante",
			es: "Placaje Ígneo",
			pt: "Investida Flamejante",
			it: "Fiammazione",
			de: "Flammentackle"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Takeshi Nakamura",

	thirdParty: {
		cardmarket: 805405
	}
}

export default card