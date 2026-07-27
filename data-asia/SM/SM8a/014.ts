import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・コケコ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "せんじんのまい" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。自分のベンチポケモン2匹に、トラッシュにある[雷]エネルギーを1枚ずつつける。その後、このカードをロストゾーンに置く。（ついているカードは、すべてトラッシュする。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マッハボルト" },
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558588,
			},
		},
	],

	retreat: 1,
	rarity: "Rare Holo",
	dexId: [785],
};

export default card;
