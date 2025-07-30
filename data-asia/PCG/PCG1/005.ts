import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "カクナ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [14],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "ポイズンの見返り",
			},
			effect: {
				ja: "カクナがあなたのアクティブなポカモンであり、相手の攻撃によって損傷を受けている場合（カクナがノックアウトされたとしても）、攻撃するポカモンは現在毒されています。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 10,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
