import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "おおきいマラサダ",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンのHPを「20」回復し、特殊状態も1つ回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561655,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
