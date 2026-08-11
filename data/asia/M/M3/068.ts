import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "古びたアゴの化石",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP60のタイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。自分の番の中でなら、場に出ているこのカードをトラッシュできる。",
	},

	abilities: [{"type": "Ability", "name": {"ja": "いかくのアゴ"}, "effect": {"ja": "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは「-30」される。"}}],

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",

	thirdParty: {
		cardmarket: 868061,
		tcgplayer: 674387,
	},
};

export default card;