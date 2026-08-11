import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "メガミミロップex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "しっぷうづき"}, "damage": "60+", "cost": ["Colorless"], "effect": {"ja": "この番に、このポケモンがベンチからバトル場に出ていたなら、170ダメージ追加。"}}, {"name": {"ja": "スパイクホッパー"}, "damage": 160, "cost": ["Colorless", "Colorless"], "effect": {"ja": "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ミミロル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [428],

	suffix: "EX",

	thirdParty: {
		cardmarket: 850608,
		tcgplayer: 655879,
	},
};

export default card;