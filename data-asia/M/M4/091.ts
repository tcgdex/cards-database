import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
	},

	illustrator: "Kazuhisa Uragami",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "両足が 羽に 変化。 音を たてずに 高速で 飛び 獲物の うなじに キバを たてる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "よるこうさく" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札から好きなカードを1枚選ぶ。残りの山札を切り、選んだカードを山札の上にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくおんぱ" },
			damage: 80,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくとこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877320,
			},
		},
	],

	evolveFrom: {
		ja: "ゴルバット",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [169],
};

export default card;
