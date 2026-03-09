import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "アルカニン-017/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [59],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "極端な速度",
			},
			effect: {
				ja: "あなたはそれに取り付けられた各エネルギーについてアルカニンを後退させるために無色の少ない支払いをします。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "火の打撃",
			},
			effect: {
				ja: "この攻撃を使用すると、アルカニンに取り付けられた火災エネルギーカードを廃棄することができます。そうした場合は、廃棄した火災エネルギーカードの数に等しい数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに30のダメージを与えます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
