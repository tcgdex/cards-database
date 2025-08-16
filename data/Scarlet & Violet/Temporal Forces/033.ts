import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [726],
	set: Set,

	name: {
		en: "Torracat",
		fr: "Matoufeu",
		es: "Torracat",
		it: "Torracat",
		pt: "Torracat",
		de: "Miezunder"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flare Strike",
			fr: "Attaque Flamboyante",
			es: "Impacto Ígneo",
			it: "Colpo Fiammante",
			pt: "Golpe de Chamas",
			de: "Feuergeschoss"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Flare Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Attaque Flamboyante.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Impacto Ígneo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Fiammante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Chamas.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Feuergeschoss nicht einsetzen."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Saya Tsuruta",

	thirdParty: {
		cardmarket: 760663
	}
}

export default card