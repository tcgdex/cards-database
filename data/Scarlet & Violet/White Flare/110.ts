import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [581],
	set: Set,

	name: {
		en: "Swanna",
		fr: "Lakmécygne",
		de: "Swaroness",
		it: "Swanna",
		pt: "Swanna",
		es: "Swanna",
		'es-mx': "Swanna"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			de: "Flattern",
			it: "Alabattito",
			pt: "Asa",
			es: "Aleteo",
			'es-mx': "Aleteo"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
			de: "Luftschnitt",
			it: "Eterelama",
			pt: "Golpe de Ar",
			es: "Tajo Aéreo",
			'es-mx': "Corte Aéreo"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835954
	}
}

export default card