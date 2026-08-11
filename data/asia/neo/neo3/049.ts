import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "スタントラー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [234],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "恐怖",
			},
			effect: {
				ja: "防御するポケモンが基本的なポケモンである場合、攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "オーバーヘッドトス",
			},
			effect: {
				ja: "ベンチ付きポケモンがある場合は、コインをひっくり返します。尾の場合、この攻撃はそれらの1つに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
