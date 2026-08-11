import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バニリッチ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "雪山に 生息する ポケモン。 大昔 氷河期の ときに 南の 土地に 移動してきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "れいとうビーム" },
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863496,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "バニプッチ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [583],
};

export default card;
