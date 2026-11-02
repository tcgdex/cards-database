import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "モクロー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "狭くて 暗い場所が 落ち着く。 トレーナーの ふところや バッグを 巣の 代わりに することも あるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とびつく" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 606612,
				tcgplayer: 597447,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [722],
};

export default card;
