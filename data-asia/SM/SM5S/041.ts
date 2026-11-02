import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "ドータクンに 祈りを ささげると 雨が 降り 作物を 育てると 古代の 人々は 信じていた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ねんりき" },
			damage: 20,
			cost: ["Metal"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "サイコレゾナンス" },
			damage: "60+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "相手の場に[超]ポケモンがいるなら、60ダメージ追加。",
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
		ja: "ドーミラー",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [437],
};

export default card;
