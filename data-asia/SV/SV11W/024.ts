import { Card } from "../../../interfaces";
import Set from "../SV11W";

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
		{ name: { ja: "たたく" }, damage: 10, cost: ["Colorless"] },
		{
			name: { ja: "アイスエッジ" },
			damage: "20+",
			cost: ["Water", "Colorless"],
			effect: { ja: "コインを1回投げオモテなら、20ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [582],
	thirdParty: {
		cardmarket: 829026,
		tcgplayer: 636577,
	},
};

export default card;
