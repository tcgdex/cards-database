import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "ヒゲが アンテナの 役割。 電波を 送受信して 遠くの 仲間と 連絡を 取り合うのだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "しっぽはつでん"}, "cost": ["Lightning"], "effect": {"ja": "相手のポケモン全員についているエネルギーの数ぶんまで、自分のトラッシュから「基本エネルギー」を選び、自分のポケモンに好きなようにつける。"}}, {"name": {"ja": "でんきショック"}, "damage": 30, "cost": ["Lightning", "Colorless"], "effect": {"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [702],

	thirdParty: {
		cardmarket: 868095,
		tcgplayer: 674404,
	},
};

export default card;