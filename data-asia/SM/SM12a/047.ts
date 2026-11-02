import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "マッギョ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "皮膚が 硬いので 相撲取りに 踏まれても 平気。 電気を 流すとき 笑い顔に なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "らくらい" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチポケモン1匹にも、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ビリビリトラップ" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のダメカンがのっているポケモンの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543706,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "None",
	dexId: [618],
};

export default card;
