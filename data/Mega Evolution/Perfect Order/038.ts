import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Probopass",
		fr: "Tarinorme",
		es: "Probopass",
		'es-mx': "Probopass",
		de: "Voluminas",
		it: "Probopass",
		pt: "Probopass"
	},

	illustrator: "Nurikabe",
	rarity: "Common",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Rolling Rocks",
			fr: "Rochers Roulants",
			es: "Rocas Rodantes",
			'es-mx': "Rocas Rodantes",
			de: "Rollende Steine",
			it: "Massi Rotolanti",
			pt: "Pedras Rolantes"
		},

		damage: 60
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Obliterating Nose",
			fr: "Nez Destructeur",
			es: "Nariz Destructora",
			'es-mx': "Nariz Destructora",
			de: "Niederstreckende Nase",
			it: "Naso Devastante",
			pt: "Obliteração Nasal"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			'es-mx': "Descarta 3 Energías de este Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tre Energie da questo Pokémon.",
			pt: "Descarte 3 Energias deste Pokémon."
		},

		damage: 260
	}],

	retreat: 3,
	regulationMark: "J"
}

export default card