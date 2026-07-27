import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ドサイドン",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "手のひらの 穴から イシツブテを 発射。 全身の プロテクターは 火山の 噴火にも 耐えられる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "やまおろし" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の山札を上から3枚トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "がんせきほう" },
			damage: 170,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは弱点・抵抗力を計算しない。次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561029,
			},
		},
	],

	evolveFrom: {
		ja: "サイドン",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [464],
};

export default card;
