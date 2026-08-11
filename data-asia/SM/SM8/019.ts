import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "バクフーン",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		ja: "燃えさかる 体毛を こすり合わせ 爆風を 起こして 攻撃する。 大技を 隠し持っている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バーニングエナジー" },
			effect: {
				ja: "自分の番に1回使える。この番の終わりまで、自分の場のポケモンについているエネルギーは、すべて[炎]エネルギーとしてあつかう。（新しく場に出したカードもふくむ。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ロストフレイム" },
			damage: 120,
			cost: ["Fire", "Fire", "Fire", "Fire"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを2個、ロストゾーンに置く。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558658,
			},
		},
	],

	evolveFrom: {
		ja: "マグマラシ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [157],
};

export default card;
