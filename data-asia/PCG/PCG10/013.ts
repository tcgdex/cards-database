import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Combusken",
	},


	category: "Pokemon",
	dexId: [256],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "自然な治療",
			},
			effect: {
				ja: "ファイアエネルギーカードを手からコンバスケンに取り付けるときは、Combuskenからすべての特別な条件を削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "突進",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 50,
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
