import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "尻尾の 先を 敵に 押しつけ 高圧電流を 流し込む。 一瞬で 敵は 黒コゲ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみなりパンチ" },
			damage: "60+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、60ダメージ追加。ウラなら、このポケモンにも20ダメージ。",
			},
		},
		{
			name: { ja: "ギガインパクト" },
			damage: 170,
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561223,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 4,
	rarity: "None",
	dexId: [466],
};

export default card;
