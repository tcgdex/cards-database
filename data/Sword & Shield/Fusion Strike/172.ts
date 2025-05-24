import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [629],
	set: Set,

	name: {
		en: "Vullaby",
		fr: "Vostourno",
		es: "Vullaby",
		it: "Vullaby",
		pt: "Vullaby",
		de: "Skallyk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "Vullaby grow quickly. Bones that have gotten too small for older Vullaby to wear often get passed down to younger ones in the nest."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			de: "Rasierflügel",
			es: "Ala Cortante",
			pt: "Asa Cortante",
			it: "Ala Tagliente"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
			de: "Luftschnitt",
			es: "Tajo Aéreo",
			pt: "Golpe de Ar",
			it: "Eterelama"
		},

		damage: 30,

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			it: "Scarta un'Energia da questo Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card