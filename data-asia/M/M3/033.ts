import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャオニクス",
	},

	illustrator: "Kannnu",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "オスに 比べて すこし わがままで 攻撃的。 機嫌を 損ねると サイコパワーで 痛めつけられる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "まどわす"}, "cost": ["Psychic"], "effect": {"ja": "相手のバトルポケモンをこんらんにする。"}}, {"name": {"ja": "サイコキネシス"}, "damage": "30+", "cost": ["Psychic"], "effect": {"ja": "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ニャスパー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [678],

	thirdParty: {
		cardmarket: 867955,
		tcgplayer: 674352,
	},
};

export default card;