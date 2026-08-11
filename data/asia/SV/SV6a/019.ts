import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "サマヨール",
		'zh-tw': "彷徨夜靈",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体の中で 燃えている 真っ赤な ひとつ目が サマヨールの 本体と いわれるが 誰も 見ていない。",
		'zh-tw': "據說在體內燃燒著的鮮紅獨眼 是彷徨夜靈的本體， 但沒有人親眼見過。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "カースドボム" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。相手のポケモン1匹に、ダメカンを5個のせる。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "おにび",
				'zh-tw': "‌[特性]咒詛炸彈",
			},
			damage: 50,
			cost: ["Psychic", "Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773768,
				tcgplayer: 566270,
			},
		},
	],

	evolveFrom: {
		ja: "ヨマワル",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [356],
};

export default card;
