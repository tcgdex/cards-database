import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "バルキー",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],

	description: {
		ja: "様々な 相手と 戦うなかで 自分に 合った 格闘スタイルを 模索する ひたむきな ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ボカボカなぐる"}, "damage": "10+", "cost": ["Void"], "effect": {"ja": "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [236],

	thirdParty: {
		cardmarket: 840314,
		tcgplayer: 647132,
	},
};

export default card;