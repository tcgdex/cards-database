import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		es: "Cyclizar",
		it: "Cyclizar",
		pt: "Cyclizar",
		de: "Mopex"
	},

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
			es: "De Gira",
			it: "Granturismo",
			pt: "Turistando",
			de: "Spritztour"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Speed Attack",
			fr: "Attaque Rapide",
			es: "Ataque Fugaz",
			it: "Attacco Veloce",
			pt: "Ataque em Velocidade",
			de: "Tempoangriff"
		},

		damage: 100
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card