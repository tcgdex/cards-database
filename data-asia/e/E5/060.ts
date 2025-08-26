import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "ウィグリティフ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [40],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "良い隣人",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、Wigglytuffがベンチにある場合、コインをひっくり返すことができます。ヘッドの場合、各プレイヤーはアクティブなPokmonから最大2つのダメージカウンターを削除します。このターンを既に別のWigglytuffのGood Neighbor Pok-Powerを使用している場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "波をします",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は、あなたがプレイしているポケモンの数を10回ダメージします。",
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
			stamps: ["1st Edition"],
		},
	],
};

export default card
