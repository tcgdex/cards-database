import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コイル",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "電磁波を 放ち 空を 漂う。 電気を 喰っているときに 触ると 全身が ビリッと 痺れるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マグネサーチ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[鋼]エネルギーを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Metal"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551431,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [81],
};

export default card;
