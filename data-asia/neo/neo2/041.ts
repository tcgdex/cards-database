import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "猟犬",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [229],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				ja: "クランチ",
			},
			effect: {
				ja: "次のターンの終わりまで、攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、その攻撃は防御ポケモンに20回以上のダメージを与えます。",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "火炎放射器",
			},
			effect: {
				ja: "ハウズームに取り付けられた1つの消防剤カードを捨てたり、この攻撃は何もしません。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
