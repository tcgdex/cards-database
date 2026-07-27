import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ムンナ",
		'zh-tw': "食夢夢",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "夢を 食べて 煙を 吐く。 楽しい 夢なら ピンク色で 悪夢の ときは 黒っぽいぞ。",
		'zh-tw': "在吃掉夢之後會吐出煙霧。吃了快樂的夢時，煙霧是粉紅色的；如果是惡夢，煙霧則是黑灰色的。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575601,
				tcgplayer: 569547,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [517],
};

export default card;
