import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
		'es-es': "Servine",
		'it-it': "Servine",
		'de-de': "Efoserp",
		'pt-br': "Servine",
		'ko-kr': "샤비"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",

	dexId: [496],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Snivy"
	},

	description: {
		'en-us': "It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip.",
		'fr-fr': "Il court comme s'il glissait sur le sol. Il déroute l'ennemi\npar ses mouvements et l'assomme d'un coup de liane.",
		'es-es': "Parece que se desliza al correr. Engaña a sus rivales\ncon su velocidad y los fustiga con su látigo.",
		'it-it': "Corre quasi scivolando sulle superfici. Confonde il nemico\ncon i rapidi movimenti, per poi attaccarlo con una frustata.",
		'de-de': "Huscht beinahe gleitend über den Boden\nund täuscht Gegner mit agilen Manövern,\nbis es mithilfe seiner Efeurute obsiegt.",
		'pt-br': "Move-se pelo chão como se estivesse deslizando.\nAtordoa seus inimigos com movimentos rápidos\ne os ataca com um chicote de vinha.",
		'ko-kr': "땅을 미끄러지듯 달린다.\n빠른 움직임으로 상대를 혼란시키고\n덩굴채찍으로 꼼짝 못하게 한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'de-de': "Rankenhieb",
			'pt-br': "Chicote de Vinha",
			'ko-kr': "덩굴채찍"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
