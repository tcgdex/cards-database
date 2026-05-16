import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "雨雲を 呼べる ポケモンとして 大昔から 祀られていた。 ときどき 地面に 埋められている。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "トリプルドロー"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札を3枚引く。"}}, {"name": {"ja": "どうぐおとし"}, "damage": "40x", "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "おたがいのポケモン全員についている「ポケモンのどうぐ」の数×40ダメージ。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ドーミラー",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [437],

	thirdParty: {
		cardmarket: 850567,
		tcgplayer: 655839,
	},
};

export default card;