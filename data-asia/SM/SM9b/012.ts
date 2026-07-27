import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドラン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "基本的に ぼんやり している。 シッポが ちぎれて シェルダーが 外れてしまうと ヤドンに 戻る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あくび" },
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "かれいなるかけ" },
			damage: "100×",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数x100ダメージ。すべてウラなら、この対戦は自分の負けになる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558130,
			},
		},
	],

	evolveFrom: {
		ja: "ヤドン",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [80],
};

export default card;
