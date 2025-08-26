import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "輝くチャリザード",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 100,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire", "Lightning", "Lightning"],
			name: {
				ja: "ホワイトホットの炎",
			},
			effect: {
				ja: "輝くチャリザードに取り付けられた1つの消防エネルギーカードと1枚の稲妻エネルギーカードを捨てるか、この攻撃は何もしません。コインをひっくり返します。尾の場合、輝くカリザードはそれ自体に30のダメージを与えます。",
			},
			damage: 100,
		},
	],

	retreat: 3,

};

export default card
