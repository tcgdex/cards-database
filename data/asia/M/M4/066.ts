import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌメルゴン",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'ja-jp': "人懐っこい ドラゴンポケモン。 大好きな トレーナーに 抱き着いて 粘液で ヌルヌルにしてしまう。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぬめぬめスリップ" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、相手のバトルポケモンがにげるとき、相手はコインを1回投げる。ウラなら、にげるためのエネルギーはトラッシュせず、入れ替えをしない。この特性の効果は重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "りゅうのはどう" },
			damage: 160,
			cost: ["Water", "Psychic"],
			effect: {
				'ja-jp': "自分の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876965,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌメイル",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [706],
};

export default card;
