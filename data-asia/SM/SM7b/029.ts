import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "キルリア",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Fairy"],

	description: {
		ja: "サイコパワーを 操り まわりの 空間を ねじ曲げる ことで 未来を 見通す ことが できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "チャームボイス" },
			damage: 50,
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558854,
			},
		},
	],

	evolveFrom: {
		ja: "ラルトス",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [281],
};

export default card;
