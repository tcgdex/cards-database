import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルトロス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "尻尾の トゲから 電撃を 撃ち出す。 イッシュ地方の 空を 飛び回り 雷を 落とす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぷうサンダー" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチに「トルネロス」がいるなら、50ダメージ追加。",
			},
		},
		{
			name: { ja: "らくらい" },
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン1匹にも、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557291,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [642],
};

export default card;
