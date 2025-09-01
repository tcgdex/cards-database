import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "仮面舞踏会",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [284],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "旋風",
			},
			effect: {
				ja: "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "銀風",
			},
			effect: {
				ja: "次のターン中に、攻撃が防御ポケモンにダメージを与えた場合（脱力感と抵抗を適用した後）、その攻撃はさらに30のダメージを与えます。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
