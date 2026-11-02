import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワン",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "電気を つくって 脚に 送り 走りを アシスト。 三日三晩 休まず 走れるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "そうでんダッシュ" },
			damage: 50,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[L]エネルギー」を2枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863565,
			},
		},
	],

	evolveFrom: {
		ja: "ワンパチ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [836],
};

export default card;
