import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [958],
	set: Set,

	name: {
		fr: "Forgella",
		en: "Tinkatuff",
		es: "Tinkatuff",
		it: "Tinkatuff",
		pt: "Tinkatuff",
		de: "Tafforgita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Poing Léger",
			en: "Light Punch",
			es: "Puño Ligero",
			it: "Pugnetto",
			pt: "Soco de Luz",
			de: "Leichter Hieb"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Puissance Illimitée",
			en: "Boundless Power",
			es: "Poder Ilimitado",
			it: "Potere Incontenibile",
			pt: "Poder Ilimitado",
			de: "Unbegrenzte Kraft"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Akira Komayama",

	thirdParty: {
		cardmarket: 715578
	}
}

export default card