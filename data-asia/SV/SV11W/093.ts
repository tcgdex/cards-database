import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "チョボマキ",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "敵に 襲われると 殻の ふたを 閉じて 防御。 ふたの すきまから ベトベトした 毒液を 飛ばす。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しげきしんか" },
			effect: {
				ja: "自分の場に「カブルモ」がいるなら、このポケモンは、最初の自分の番や、出したばかりの番でも進化できる。",
			},
		},
	],

	attacks: [
		{ name: { ja: "とびだしヘッド" }, damage: 10, cost: ["Colorless"] },
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [616],
};

export default card;
