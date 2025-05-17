import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Servine",
		fr: "Lianaja",
		es: "Servine",
		it: "Servine",
		de: "Efoserp",
		'pt-br': "Servine",
		ko: "샤비"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Snivy"
	},

	description: {
		en: "It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip.",
		fr: "Il court comme s'il glissait sur le sol. Il déroute l'ennemi\npar ses mouvements et l'assomme d'un coup de liane.",
		es: "Parece que se desliza al correr. Engaña a sus rivales\ncon su velocidad y los fustiga con su látigo.",
		it: "Corre quasi scivolando sulle superfici. Confonde il nemico\ncon i rapidi movimenti, per poi attaccarlo con una frustata.",
		de: "Huscht beinahe gleitend über den Boden\nund täuscht Gegner mit agilen Manövern,\nbis es mithilfe seiner Efeurute obsiegt.",
		'pt-br': "Move-se pelo chão como se estivesse deslizando.\nAtordoa seus inimigos com movimentos rápidos\ne os ataca com um chicote de vinha.",
		ko: "땅을 미끄러지듯 달린다.\n빠른 움직임으로 상대를 혼란시키고\n덩굴채찍으로 꼼짝 못하게 한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			es: "Látigo Cepa",
			it: "Frustata",
			de: "Rankenhieb",
			'pt-br': "Chicote de Vinha",
			ko: "덩굴채찍"
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
