import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		fr: "Pikachu V",
		de: "Pikachu V",
		es: "Pikachu V",
		pt: "Pikachu V",
		it: "Pikachu V",
		en: "Pikachu V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Pika Propulsion",
			de: "Pika-Antrieb",
			es: "Pika Impulso",
			pt: "Impulso Pikachu",
			it: "Pika-Impulso",
			en: "Pika Drive"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card