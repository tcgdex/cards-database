import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "コロトック",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "鳴くときは ナイフのような 腕を 胸の 前で 交差させる。 即興で メロディを 作る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きままなえんそう" },
			damage: "30+",
			cost: ["Grass"],
			effect: {
				ja: "自分の手札が1枚なら、100ダメージ追加。3枚なら、相手のバトルポケモンをこんらんにする。6枚なら、相手のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554757,
			},
		},
	],

	evolveFrom: {
		ja: "コロボーシ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [402],
};

export default card;
