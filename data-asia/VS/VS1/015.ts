import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ホイットニーのウィッグライツ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [40],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "平手打ち",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "膨らみます",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドとディフェンディングポケモンが相手の次のターン中にホイットニーのウィッグライツを攻撃した場合、攻撃によって与えられた損害は20倍に減少します（脱力感と抵抗を適用した後）（ポケモンのベンチングはこの効果を終了します。）",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
