import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "キューボン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [104],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "友達を探してください",
			},
			effect: {
				ja: "基本的なポケモンを公開するまで、デッキからカードを公開してください。そのカードを相手に見せて、あなたの手に入れてください。もう一方の公開されたカードをデッキにシャッフルします。 （基本的なポケモンを明らかにしない場合は、明らかになったカードをすべてデッキに戻してください。）",
			},
		},
		{
			cost: ["Fighting"],
			name: {
				ja: "ボネメラン",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
