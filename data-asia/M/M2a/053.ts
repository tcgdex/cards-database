import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレザード",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "エリマキを 広げて 発電する。 エレザード １匹で 高層ビルで 必要な 電気を 作れるのだ。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "エリマキはつでん"}, "effect": {"ja": "この番に、手札から「カナリィ」を出して使っていたなら、自分の番に1回使える。自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "パワフルボルト"}, "cost": ["Lightning", "Colorless", "Colorless"], "damage": "70×", "effect": {"ja": "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×70ダメージ。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "エリキテル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [695],
};

export default card;
