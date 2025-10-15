import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "暗い猟犬",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [229],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "シェイクダウン",
			},
			effect: {
				ja: "見ても捨てずに相手の手からカードを選択してください。",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "暗い火",
			},
			effect: {
				ja: "ダークハウンドームに取り付けられた火のエネルギーまたは闇のエネルギーを捨てることができます。そうした場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
