import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピジョットex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [18],
	hp: 280,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ピジョン"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マッハサーチ"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。この番、すでに別の「マッハサーチ」を使っていたなら、この特性は使えない。"
		}
	}],

	attacks: [{
		name: {
			ja: "ふきすさぶ"
		},

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746521,
				tcgplayer: 567540,
				cardtrader: 269712,
			},
		},
	]
}

export default card
