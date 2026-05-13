import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のミミッキュ",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "陽の 当たらない 暗がりに 棲む。 人前に 出るときは ピカチュウに 似せた 布で 全身を 隠す。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ほうせきごっこ"}, "damage": "", "cost": ["Psychic"], "effect": {"ja": "相手のバトル場の「テラスタル」のポケモンが持つワザを1つ選び、このワザとして使う。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [778],
};

export default card;
