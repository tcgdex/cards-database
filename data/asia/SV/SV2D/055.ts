import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タギングル",
		'zh-tw': "塗標客",
		'th-th': "ทากิงกูลู",
		'id-id': "Grafaiai"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [945],
	hp: 90,
	types: ["Darkness"],

	description: {
		'ja-jp': "エサによって 色が 変化する 毒の 唾液を 指に 塗して 森の 木々に 模様を 描く。",
		'zh-tw': "會將能隨著吃下的食物而變色的毒唾液塗在指頭上， 在森林的樹木描繪上圖案。",
		'th-th': "สีของน้ำลายพิษจะเปลี่ยนไปตามอาหาร มันจะป้ายน้ำลายบนนิ้วแล้ววาดลวดลายบนต้นไม้ในป่า",
		'id-id': "Grafaiai melumuri jarinya dengan air liur beracun yang warnanya berubah tergantung dari makanannya, dan melukis pola pada pohon-pohon yang ada di hutan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "どくえき",
			'zh-tw': "毒液",
			'th-th': "ของเหลวพิษ",
			'id-id': "Cairan Racun"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'ja-jp': "カラフルグラフィティ",
			'zh-tw': "鮮豔塗鴉",
			'th-th': "คัลเลอร์ฟูลกราฟฟิตี้",
			'id-id': "Colorful Graffiti"
		},

		damage: "40×",

		effect: {
			'ja-jp': "自分の手札から基本エネルギーを好きなだけトラッシュし、トラッシュした基本エネルギーのタイプの数×40ダメージ。",
			'zh-tw': "從自己的手牌將任意數量的基本能量卡丟棄，造成丟棄的基本能量卡的屬性種類的數量×40點傷害。",
			'th-th': "ทิ้งการ์ดพลังงานพื้นฐานจากบนมือฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนประเภทของการ์ดพลังงานพื้นฐานที่ทิ้ง x40",
			'id-id': "Buang sesukanya Energi Dasar dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 40 untuk tiap tipe Energi Dasar yang dibuang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705359,
				tcgplayer: 565917,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card