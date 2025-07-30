import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Fulgulairo",
		en: "Kilowattrel",
		es: "Kilowattrel",
		it: "Kilowattrel",
		pt: "Kilowattrel",
		de: "Voltrean"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Picpic",
			en: "Peck",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Aile Jet",
			en: "Jet Wing",
			es: "Ala Propulsión",
			it: "Ala Jet",
			pt: "Asa a Jato",
			de: "Jet-Flügel"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 150
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Pani Kobayashi",

	thirdParty: {
		cardmarket: 715557
	}
}

export default card