import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピジョン",
		'zh-tw': "比比鳥",
		id: "Pidgeotto"
	},

	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [17],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ポッポ"
	},

	description: {
		ja: "広い 縄張りを 持っており 侵入する 邪魔者は 徹底的に つつかれてしまう。",
		'zh-tw': "擁有著廣闊的地盤。要是有哪個討厭鬼膽敢入侵， 就會遭到牠的瘋狂啄擊。",
		id: "Pidgeotto memiliki wilayah teritorial yang luas. Pokémon ini mematuk secara menyeluruh semua pengganggu yang menyusup ke wilayah tersebut."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "はばたく",
			'zh-tw': "羽擊",
			id: "Mengepak"
		},

		damage: 20,
		cost: ["Colorless"]
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
				cardmarket: 747659,
				tcgplayer: 567706,
				cardtrader: 270373,
			},
		},
	]
}

export default card