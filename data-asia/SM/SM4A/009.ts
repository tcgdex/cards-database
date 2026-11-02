import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ウリムー",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "エサを 探すため 鼻を こすり合わせ 地面を 掘っている。 たまに 温泉を 掘り当てる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560254,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [220],
};

export default card;
