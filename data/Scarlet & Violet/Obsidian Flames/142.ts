import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [227],
	set: Set,

	name: {
		fr: "Airmure",
		en: "Skarmory",
		es: "Skarmory",
		it: "Skarmory",
		pt: "Skarmory",
		de: "Panzaeron"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

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
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			fr: "Acier Déchirant",
			en: "Slashing Steel",
			es: "Acero Cortante",
			it: "Acciaio Lacerante",
			pt: "Aço Cortante",
			de: "Schlitzender Stahl"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Acier Déchirant.",
			en: "During your next turn, this Pokémon can't use Slashing Steel.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Acero Cortante.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Acciaio Lacerante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Aço Cortante.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Stahl nicht einsetzen."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Takeshi Nakamura",

	thirdParty: {
		cardmarket: 725222
	}
}

export default card