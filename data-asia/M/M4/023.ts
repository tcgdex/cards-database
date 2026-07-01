import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "カチコール",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "体を 覆う 氷が 敵の 攻撃を 防ぐ。 割られても 冷気で すぐに 氷を 張る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひんやり",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "こおりのいぶき",
			},
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [712],

	thirdParty: {
		cardmarket: 876922
	}
};

export default card;
