import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・コケコ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "守り神と 呼ばれるが 気分を 害する 人間や ポケモンには 襲い掛かる 荒ぶる神 でもある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エレキボール" },
			damage: 30,
			cost: ["Lightning"],
		},
		{
			name: { ja: "ネイチャーダイブ" },
			damage: "100+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ウルトラビースト」なら、100ダメージ追加。その場合、このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556987,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [785],
};

export default card;
