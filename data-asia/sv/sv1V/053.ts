import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "オラチフ",
		'zh-tw': "偶叫獒",
		th: "โอราทิฟ",
		id: "Maschiff"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [942],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "発達した あごと キバは 岩を 噛み砕く 力強さ。 厚い 脂肪は 防御力 抜群。",
		'zh-tw': "發達的顎部和獠牙擁有能咬碎岩石的強大威力。 厚厚的脂肪使牠防禦力超群。",
		th: "ขากรรไกรและเขี้ยวที่พัฒนาจนแข็งแกร่งสามารถบดขยี้หินได้ ไขมันที่หนาทำให้มีพลังป้องกันที่ดีเยี่ยม",
		id: "Rahang dan taring Maschiff yang telah berkembang memiliki kekuatan untuk mengunyah habis batu. Lemak tebal Pokémon ini memiliki kekuatan pertahanan yang luar biasa."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "うしろげり",
			'zh-tw': "後踢",
			th: "เตะกลับหลัง",
			id: "Tendangan Belakang"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "やみのキバ",
			'zh-tw': "暗之牙",
			th: "เขี้ยวแห่งความมืด",
			id: "Taring Kegelapan"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card