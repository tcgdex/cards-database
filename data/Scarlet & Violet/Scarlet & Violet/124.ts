import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Koraidon",
		fr: "Koraidon",
		es: "Koraidon",
		it: "Koraidon",
		pt: "Koraidon",
		de: "Koraidon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 70
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Rampaging Fang",
			fr: "Croc Furieux",
			es: "Colmillo Furioso",
			it: "Zanna Infuriata",
			pt: "Canino Feroz",
			de: "Tobende Fänge"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			it: "Scarta tre Energie da questo Pokémon.",
			pt: "Descarte 3 Energias deste Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 190
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "Kouki Saitou",

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
		cardmarket: 689767
	}
}

export default card