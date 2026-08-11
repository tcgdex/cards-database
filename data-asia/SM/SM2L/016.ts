import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラゴローン",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "ドラバイトを 好んで 喰らう。 喰った 成分が 結晶になり 身体の一部に 浮きだしているぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみなりパンチ" },
			damage: "50+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。ウラなら、このポケモンにも20ダメージ。",
			},
		},
		{
			name: { ja: "エレキバレット" },
			damage: 80,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561420,
			},
		},
	],

	evolveFrom: {
		ja: "アローライシツブテ",
	},

	retreat: 4,
	rarity: "Common",
	dexId: [75],
};

export default card;
