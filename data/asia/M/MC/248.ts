import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトム",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クラッシュパルス" },
			cost: ["Lightning"],
			effect: {
				ja: "相手の手札を見て、その中にある「グッズ」と「ポケモンのどうぐ」を、すべてトラッシュする。",
			},
		},
		{
			name: { ja: "エネショート" },
			damage: "20×",
			cost: ["Lightning"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863544,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [479],
};

export default card;
