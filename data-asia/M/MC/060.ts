import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ダダリン",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "海底を 漂う 藻屑が 沈没船の 部品を 取りこんで ゴーストポケモンに 生まれ変わった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かいてんアタック" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "スチールアンカー" },
			damage: "80+",
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "自分のベンチに[M]ポケモンがいるなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863351,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [781],
};

export default card;
