import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴニョニョ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "危険を 察知すると ジェット機と 同じ 音量の 鳴き声を 上げて 敵を ひるませるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ごうきゅう" },
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。次の相手の番、相手は手札からトレーナーズを出して使えない。",
			},
		},
		{
			name: { ja: "はたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559032,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [293],
};

export default card;
