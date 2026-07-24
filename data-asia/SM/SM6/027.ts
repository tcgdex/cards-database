import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオン",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "背中の アームから 体内の 水蒸気を 噴射する。 山 ひとつ 吹き飛ばす 威力。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ジェットほうすい" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある[水]エネルギーを、1枚トラッシュする。その後、相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サウナボム" },
			damage: 100,
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559572,
			},
		},
	],

	retreat: 3,
	rarity: "Rare Holo",
	dexId: [721],
};

export default card;
