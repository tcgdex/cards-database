import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "vigoroth",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [288],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ストライクバック",
			},
			effect: {
				ja: "Vigorothがあなたのアクティブなポカモンであり、相手の攻撃によって損傷を受けている場合（Vigorothがノックアウトされたとしても）、攻撃するPokã©Monに1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "待ち伏せ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
