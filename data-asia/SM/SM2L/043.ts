import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルホッグ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "体内の 発光物質で 目玉や 体を 光らせ 襲ってきた 敵を ひるませる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しなさだめ" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の山札を上から2枚見て、どちらか1枚をトラッシュし、残りのカードは山札の上にもどす。",
			},
		},
		{
			name: { ja: "たたきつける" },
			damage: "60×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561447,
			},
		},
	],

	evolveFrom: {
		ja: "ミネズミ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [505],
};

export default card;
