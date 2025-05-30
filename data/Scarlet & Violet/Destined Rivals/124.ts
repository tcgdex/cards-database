import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Koraidon",
		fr: "Koraidon",
		de: "Koraidon",
		it: "Koraidon",
		es: "Koraidon",
		pt: "Koraidon"
	},

	illustrator: "Kouki Saitou",
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
			de: "Klauenschlitzer",
			it: "Lacerartiglio",
			es: "Cuchillada Garra",
			pt: "Golpe de Garra"
		},

		damage: 70
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Rampaging Fang",
			fr: "Croc Furieux",
			de: "Tobende Fänge",
			it: "Zanna Infuriata",
			es: "Colmillo Furioso",
			pt: "Canino Feroz"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tre Energie da questo Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			pt: "Descarte 3 Energias deste Pokémon."
		},

		damage: 190
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card