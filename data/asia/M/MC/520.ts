import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホップのアーマーガア",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		'ja-jp': "羽の 一部が 鋼に 変化。 重たい 翼を ものともせずに 大空を ゆうゆうと 飛びまわる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "つきぬける" },
			damage: 50,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "はがねのつばさ" },
			damage: 150,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-60」される。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863822,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ホップのアオガラス",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [823],
};

export default card;
