import { Card } from "models/database/card";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドータクン",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'ja-jp': "ドータクンに 祈りを ささげると 雨が 降り 作物を 育てると 古代の 人々は 信じていた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ねんりき" },
			damage: 20,
			cost: ["Metal"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "サイコレゾナンス" },
			damage: "60+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の場に[超]ポケモンがいるなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559995,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドーミラー",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [437],
};

export default card;
