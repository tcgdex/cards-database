import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [219],
	set: Set,

	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		es: "Magcargo",
		it: "Magcargo",
		pt: "Magcargo",
		de: "Magcargo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Eri Yamaki",

	description: {
		en: "Its body is as hot as lava and is always billowing. Flames will occasionally burst from its shell."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
			de: "Steinwurf",
			es: "Lanzarrocas",
			pt: "Lançamento de Rocha",
			it: "Sassata"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Body Splash",
			fr: "Jet Corporel",
			de: "Bauchklatscher",
			es: "Salpicadura Corporal",
			pt: "Borrifada Corporal",
			it: "Corposplash"
		},

		damage: 150,

		effect: {
			en: "Flip 3 coins. For each tails, discard an Energy from this Pokémon.",
			fr: "Lancez 3 pièces. Pour chaque côté pile, défaussez une Énergie de ce Pokémon.",
			de: "Wirf 3 Münzen. Lege pro Zahl 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			es: "Lanza 3 monedas. Por cada cruz, descarta 1 Energía de este Pokémon.",
			pt: "Jogue 3 moedas. Para cada coroa, descarte 1 Energia deste Pokémon.",
			it: "Lancia tre volte una moneta. Ogni volta che esce croce, scarta un'Energia da questo Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582169
	}
}

export default card