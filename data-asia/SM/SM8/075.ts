import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ケララッパ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "クチバシを 反り返らせ 色んな 音で 鳴く。 かなり うるさいので 周りの 御宅には 嫌われるぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "やまわたり" },
			effect: {
				ja: "このカードが手札にあるなら、自分の番に1回使えて、使ったなら、このカードをロストゾーンに置く。相手の山札を上から1枚見て、もとにもどす。そのカードがサポートの場合、のぞむなら、ロストゾーンに置く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558714,
			},
		},
	],

	evolveFrom: {
		ja: "ツツケラ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [732],
};

export default card;
