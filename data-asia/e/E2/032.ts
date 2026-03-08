import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "マグネマイト-032/092",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "導電性ボディ",
			},
			effect: {
				ja: "ベンチ上の各マグナイトにこのポケモンを支払います。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "磁気爆弾",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、マグネマイトはそれ自体に10ダメージを与えます。",
			},
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
