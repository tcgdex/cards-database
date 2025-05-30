import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Alomomola",
		fr: "Mamanbo",
		de: "Mamolida",
		it: "Alomomola",
		es: "Alomomola",
		pt: "Alomomola"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Surf",
			fr: "Surf",
			de: "Surfer",
			it: "Surf",
			es: "Surf",
			pt: "Surfar"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Aqua Slash",
			fr: "Aqua Slash",
			de: "Aquaschlag",
			it: "Idrosquarcio",
			es: "Cuchillada Acuática",
			pt: "Aqua Corte"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card