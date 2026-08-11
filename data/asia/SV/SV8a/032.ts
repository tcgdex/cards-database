import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ワニノコ",
		'id-id': "Totodile",
		'th-th': "วานิโนโกะ",
		'zh-tw': "小鋸鱷",
		'zh-cn': "小鋸鱷"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "None",
	category: "Pokemon",
	dexId: [158],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "小さいながらも 暴れん坊。 目の前で 動くものが あれば とにかく かみついてくる。",
		'id-id': "Meskipun kecil, Totodile itu perusuh. Jika ada sesuatu yang bergerak di hadapannya, ia akan langsung menggigitnya.",
		'th-th': "แม้ตัวจะเล็ก แต่ก็เป็นจอมเกเร หากมีอะไรเคลื่อนไหวอยู่ตรงหน้า มันก็จะเข้าไปกัดไว้ก่อนเลย",
		'zh-tw': "個子雖小但是個性粗暴。 只要眼前有東西在動， 就會先上去咬一口再說。",
		'zh-cn': "個子雖小但是個性粗暴。 只要眼前有東西在動， 就會先上去咬一口再說。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "かじりつく",
			'id-id': "Menggerogoti Erat-erat",
			'th-th': "กัด",
			'zh-tw': "咬緊",
			'zh-cn': "咬緊"
		},

		damage: 10,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803145,
				tcgplayer: 602372,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604524,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602373,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card