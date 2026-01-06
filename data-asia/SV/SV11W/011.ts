import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ポカブ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "敵の 攻撃を 身軽に 避けて 鼻から 火の玉を 撃ち出す。 炎で 木の実を 焼いて 食べる。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "たいあたり" }, damage: 10, cost: ["Fire"] },
		{ name: { ja: "ころがる" }, damage: 30, cost: ["Fire", "Fire"] },
	],

	weaknesses: [{ type: "Water", value: "×2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [498],

	thirdParty: {
		cardmarket: 829013,
		tcgplayer: 636564,
	},

	// @TODO: Add Pokeball/Masterball variants
};

export default card;
