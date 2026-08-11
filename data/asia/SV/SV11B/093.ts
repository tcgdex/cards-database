import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マラカッチ",
	},

	illustrator: "Heisuke Kitazawa",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "アップテンポの 踊りと 音で 花の タネを ねらう 天敵の とりポケモンを 追い払うのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はつらつニードル" },
			damage: "20+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "この番に、このポケモンのHPを回復していたなら、100ダメージ追加。",
			},
		},
		{ name: { ja: "つきさす" }, damage: 50, cost: ["Grass", "Colorless"] },
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [556],

	thirdParty: {
		cardmarket: 829335,
		tcgplayer: 636447,
	},
};

export default card;
