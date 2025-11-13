import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "ホッピップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [187],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "軽量",
			},
			effect: {
				ja: "あなたはそれに取り付けられた各草のエネルギーについてホッピップを後退させるために無色の少ない支払いをします。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "不注意なタックル",
			},
			effect: {
				ja: "Hoppipはそれ自体に10ダメージを与えます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
