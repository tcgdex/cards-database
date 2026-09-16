import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		de: "Riffex",
		es: "Toxtricity",
		it: "Toxtricity",
		'es-mx': "Toxtricity"
	},

	illustrator: "Yuriko Akase",
	rarity: "Common",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			de: "Leichter Hieb",
			es: "Puño Ligero",
			it: "Pugnetto",
			'es-mx': "Puño Ligero"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Thunderous Bolt",
			fr: "Éclair du Tonnerre",
			de: "Donnernder Einschlag",
			es: "Rayo Atronador",
			it: "Fulmine Tonante",
			'es-mx': "Rayo Atronador"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques."
		},

		damage: 150,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card