import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス-008/092",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [168],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "グルーイスライム",
			},
			effect: {
				ja: "アリアドスが遊んでいる限り、各プレイヤーはアクティブなポクモンを後退させるために追加の無色を支払う必要があります。 Gluey Slimeは、プレーンをプレイしている場合でも、プレイヤーにポクモンを後退させるために追加の無色よりも多く支払うことはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "クモ力",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は20ダメージを与え、防御ポケモンが麻痺しています。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
