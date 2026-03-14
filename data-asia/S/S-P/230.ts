import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "いれかわる",
		},
		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	description: {
		ja: "おたがいの しっぽを くっつけて 電気を 流しあうのが ピカチュウ 同士の 挨拶だ。",
	},

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 573772,
		tcgplayer: 257103
	}
}

export default card