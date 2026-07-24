import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "チルタリス",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "大空を ゆったりと 飛ぶ。 チルタリスの 美しい ハミングを 聴くと うっとり 夢心地だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "りゅうのメロディ" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札にある[竜]ポケモンを1枚、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "コットンガード" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560289,
			},
		},
	],

	evolveFrom: {
		ja: "チルット",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [334],
};

export default card;
