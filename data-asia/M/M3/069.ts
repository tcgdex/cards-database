import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "古びたヒレの化石",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP60のタイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。自分の番の中でなら、場に出ているこのカードをトラッシュできる。",
	},

	abilities: [{"type": "Ability", "name": {"ja": "ヒレのまもり"}, "effect": {"ja": "このポケモンは、相手が手札からサポートを出して使ったとき、その効果を受けない。"}}],

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",

	thirdParty: {
		cardmarket: 868063,
		tcgplayer: 674388,
	},
};

export default card;