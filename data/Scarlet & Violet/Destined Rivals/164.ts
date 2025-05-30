import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		de: "Mopex",
		it: "Cyclizar",
		es: "Cyclizar",
		pt: "Cyclizar"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Touring",
			fr: "Virée Touristique",
			de: "Spritztour",
			it: "Granturismo",
			es: "De Gira",
			pt: "Turistando"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			es: "Roba 2 cartas.",
			pt: "Compre 2 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Speed Attack",
			fr: "Attaque Rapide",
			de: "Tempoangriff",
			it: "Attacco Veloce",
			es: "Ataque Fugaz",
			pt: "Ataque em Velocidade"
		},

		damage: 100
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card