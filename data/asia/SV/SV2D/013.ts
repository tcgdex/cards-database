import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ファイアロー",
		'zh-tw': "烈箭鷹",
		'th-th': "ไฟร์แอโรว์",
		'id-id': "Talonflame"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [663],
	hp: 150,
	types: ["Fire"],

	description: {
		'ja-jp': "飛翔力は トップクラス。 １００キロ以上の 獲物を 掴んだまま 楽々 飛びまわる。",
		'zh-tw': "飛行能力數一數二。能夠攫著１００公斤以上的 獵物輕輕鬆鬆地飛來飛去。",
		'th-th': "พละกำลังในการบินระดับแนวหน้า แม้จะจับเหยื่อหนักกว่า 100 กิโลกรัมอยู่ ก็ยังบินไปมาได้สบาย ๆ",
		'id-id': "Kekuatan terbang Talonflame menduduki tingkat atas. Pokémon ini terbang berkeliling sambil membawa mangsa seberat 100 kg lebih dengan mudahnya."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "わしづかみ",
			'zh-tw': "緊抓",
			'th-th': "โฉบเหยื่อ",
			'id-id': "Mencengkeram"
		},

		damage: 50,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		}
	}, {
		cost: ["Fire"],

		name: {
			'ja-jp': "れっかのかぜ",
			'zh-tw': "烈火之風",
			'th-th': "สายลมแห่งไฟลุกโชน",
			'id-id': "Angin Api Berkobar"
		},

		damage: "70+",

		effect: {
			'ja-jp': "このポケモンにダメカンがのっているなら、90ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加90點傷害。",
			'th-th': "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			'id-id': "Jika Pokémon ini memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705317,
				tcgplayer: 565875,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card