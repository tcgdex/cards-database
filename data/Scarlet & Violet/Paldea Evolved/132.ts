import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Corboss",
		en: "Honchkrow",
		es: "Honchkrow",
		it: "Honchkrow",
		pt: "Honchkrow",
		de: "Kramshef"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Battement",
			en: "Flap",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			fr: "Vilain Lancer",
			en: "Dirty Throw",
			es: "Lanzamiento Injusto",
			it: "Brutto Tiro",
			pt: "Jogada Suja",
			de: "Schmutziger Wurf"
		},

		effect: {
			fr: "Défaussez une carte de votre main. Si vous ne le pouvez pas, cette attaque ne fait rien.",
			en: "Discard a card from your hand. If you can't, this attack does nothing.",
			es: "Descarta 1 carta de tu mano. Si no puedes, este ataque no hace nada.",
			it: "Scarta una delle carte che hai in mano. Se non puoi, questo attacco non ha effetto.",
			pt: "Descarte uma carta da sua mão. Se não puder fazer isto, este ataque não fará nada.",
			de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 140
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card