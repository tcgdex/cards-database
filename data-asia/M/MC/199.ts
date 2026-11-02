import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バニプッチ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "マイナス５０度の 息を 吐く。 雪の 結晶を 作って あたりに 雪を 降らせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たたく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "アイスエッジ" },
			damage: "20+",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863495,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [582],
};

export default card;
