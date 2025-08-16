import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [485],
	set: Set,

	name: {
		en: "Heatran",
		fr: "Heatran",
		es: "Heatran",
		pt: "Heatran",
		it: "Heatran",
		de: "Heatran"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Wrack Down",
			fr: "Réduire en Poussière",
			es: "Desmoronar",
			pt: "Desmoronar",
			it: "Abbattere",
			de: "Niederschleudern"
		},

		damage: 40
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Iron Buster",
			fr: "Buster de Fer",
			es: "Destructor Férreo",
			pt: "Destruidor Férreo",
			it: "Ferro Distruttivo",
			de: "Eisensprenger"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",
	illustrator: "Tonji Matsuno",

	thirdParty: {
		cardmarket: 805457
	}
}

export default card