import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "クルミル",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "葉っぱを かみ切り 口から 出す 粘着糸で 縫い合わせる。 自分で 服を 作る ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふえる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある「クルミル」を2枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556964,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [540],
};

export default card;
