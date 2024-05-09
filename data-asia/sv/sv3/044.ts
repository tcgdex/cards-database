import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "トゲチック"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	dexId: [176],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "優しい人の そばに いないと 元気が でなくなってしまう。 羽を動かさずに 空に浮かべる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "シェアピース"
		},

		effect: {
			ja: "おたがいのプレイヤーは、それぞれ山札を3枚引く。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スピードひこう"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card