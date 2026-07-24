import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "カブルモ",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "チョボマキと 一緒に いるときに 電気的な 刺激を 受けると 進化する 不思議な ポケモンだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "カラかぶり" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある「チョボマキ」を、1枚トラッシュする。その後、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560315,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [588],
};

export default card;
