import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Phanpy",
		fr: "Phanpy",
		es: "Phanpy",
		'es-mx': "Phanpy",
		de: "Phanpy",
		it: "Phanpy",
		pt: "Phanpy"
	},

	illustrator: "Akino Fukuji",
	rarity: "Common",
	category: "Pokemon",
	dexId: [231],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			'es-mx': "Bofetón Lodo",
			de: "Lehmschelle",
			it: "Fangosberla",
			pt: "Tapa de Lama"
		},

		cost: ["Fighting"],
		damage: 10
	}, {
		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			'es-mx': "Rodada",
			de: "Walzer",
			it: "Rotolamento",
			pt: "Rolagem"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 40
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693530,
		cardmarket: 886436
	}
}

export default card