import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴルーグ",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		'ja-jp': "マッハの スピードで 空を 飛ぶ。 胸の 封印を はがすと エネルギーが 暴走してしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダブルスマッシュ" },
			damage: "80x",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "コインを2回投げ、オモテの数×80ダメージ。" },
		},
		{
			name: { ja: "ゴルーグハンマー" },
			damage: 200,
			cost: ["Psychic", "Psychic", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	evolveFrom: {
		'ja-jp': "ゴビット",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [623],

	thirdParty: {
		cardmarket: 829374,
		tcgplayer: 636483,
	},
};

export default card;
