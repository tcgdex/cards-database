import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Drampa",
		fr: "Draïeul",
		es: "Drampa",
		'es-mx': "Drampa",
		de: "Sen-Long",
		it: "Drampa",
		pt: "Drampa"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [780],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			'es-mx': "Cachetadita",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			pt: "Tapinha"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dragon Strike",
			fr: "Frappe du Dragon",
			es: "Golpe Dragón",
			'es-mx': "Golpe Dracónico",
			de: "Drachenhieb",
			it: "Dragocolpo",
			pt: "Ataque de Dragão"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Dragon Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe du Dragon.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Dragón.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Golpe Dracónico.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Drachenhieb nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Dragocolpo.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Ataque de Dragão."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675988,
		cardmarket: 869787
	}
}

export default card