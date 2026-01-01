import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ユニラン",
	},

	illustrator: "USGMEN",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 放出して 襲ってきた 敵を 撃退。 テレパシーで 仲間と 会話する。",
	},

	stage: "Basic",

	attacks: [{ name: { ja: "ころがる" }, damage: 10, cost: ["Colorless"] }],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [577],
};

export default card;
