import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Torracat",
		fr: "Matoufeu",
		es: "Torracat",
		it: "Torracat",
		pt: "Torracat"
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
			pt: "Mordida"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flare Strike",
			fr: "Attaque Flamboyante",
			es: "Impacto Ígneo",
			it: "Colpo Fiammante",
			pt: "Golpe de Chamas"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Flare Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Attaque Flamboyante.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Impacto Ígneo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Fiammante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Chamas."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card