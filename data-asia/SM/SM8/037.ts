import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ライコウ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "体内で 渦巻く 力を 電撃として 出しながら 大地を 駆け巡る 荒々しい ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロストボルテージ" },
			damage: "30+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "自分のロストゾーンに[雷]エネルギーがあるなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558676,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [243],
};

export default card;
