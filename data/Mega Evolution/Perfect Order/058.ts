import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		'es-mx': "Aegislash",
		de: "Durengard",
		it: "Aegislash",
		pt: "Aegislash"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			'es-mx': "Cuchillada",
			de: "Schlitzer",
			it: "Lacerazione",
			pt: "Talho"
		},

		damage: 80
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Metal Slash",
			fr: "Tranche Métallique",
			es: "Tajo Metálico",
			'es-mx': "Cuchillada Metálica",
			de: "Metallschlitzer",
			it: "Lacerametallo",
			pt: "Talho de Metal"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 230
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684381,
		cardmarket: 877474
	}
}

export default card