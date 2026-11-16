import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ミジュマル",
		'zh-tw': "水水獺"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [501],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "イッシュの地に 棲みし ポケモン。 腹の貝を 得物に 敵を 斬る。 ゆえに 貝の名 帆太刀と 命名す。",
		'zh-tw': "棲息在合眾地區的寶可夢。 會將腹部貝殼作為兵刃斬擊敵手， 因而吾人將此貝殼命名為扇貝貝刀。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "たたく",
			'zh-tw': "敲擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650975,
				tcgplayer: 569770,
				cardtrader: 234081,
			},
		},
	]
}

export default card