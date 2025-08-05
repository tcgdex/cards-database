import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Zeraora V",
		de: "Zeraora V",
		es: "Zeraora V",
		pt: "Zeraora V",
		it: "Zeraora V",
		en: "Zeraora V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			fr: "Tranch'Griffe",
			de: "Klauenschlitzer",
			es: "Cuchillada Garra",
			pt: "Golpe de Garra",
			it: "Lacerartiglio",
			en: "Claw Slash"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Éclair du Tonnerre",
			de: "Donnernder Einschlag",
			es: "Rayo Atronador",
			pt: "Raio Estrondoso",
			it: "Fulmine Tonante",
			en: "Thunderous Bolt"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 190
	}],

	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669838
	}
}

export default card