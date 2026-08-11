import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのアーマーガア",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "羽の 一部が 鋼に 変化。 重たい 翼を ものともせずに 大空を ゆうゆうと 飛びまわる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "つきぬける" },
			damage: 50,
			cost: ["Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "はがねのつばさ" },
			damage: 150,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-60」される。",
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
		ja: "ホップのアオガラス",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [823],
};

export default card;
