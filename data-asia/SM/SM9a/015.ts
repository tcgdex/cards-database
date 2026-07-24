import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュウ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "身体に 電気が たまるに つれ 攻撃的に。 実は 電気が ストレスなのでは という 説もある。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ネバーギブアップ" },
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、自分のサイドの残り枚数が、相手より3枚以上多いときにしか使えない。自分のトラッシュにある[雷]エネルギーをすべて、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "ヘッドボルト" },
			damage: 110,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558202,
			},
		},
	],

	evolveFrom: {
		ja: "ピカチュウ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [26],
};

export default card;
