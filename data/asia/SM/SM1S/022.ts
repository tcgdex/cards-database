import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴルバット",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "太い キバは ストローのように 中が 空洞で 意外に もろい。 血を 吸うのに 特化 したのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくのいき" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "アクロバット" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561699,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ズバット",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [42],
};

export default card;
