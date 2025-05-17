import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Machop",
		fr: "Machoc",
		es: "Machop",
		it: "Machop",
		de: "Machollo",
		'pt-br': "Machop",
		ko: "알통몬"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange",
			es: "Puño con Nudillos",
			it: "Noccapugno",
			de: "Knöchelhieb",
			'pt-br': "Soco com Punho",
			ko: "꿀밤"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "Its whole body is composed of muscles. Even though it's the size of a human child, it can hurl 100 grown-ups.",
		fr: "Son corps est essentiellement composé de muscles.\nMême s'il fait la taille d'un petit enfant,\nil peut soulever 100 adultes avec ses bras.",
		es: "Es una masa de músculos y, pese a su\npequeño tamaño, tiene fuerza de sobra\npara levantar en brazos a 100 personas.",
		it: "Il suo corpo è formato interamente da\nmuscoli. Non è più alto di un bambino,\nma può sollevare e lanciare 100 adulti.",
		de: "Sein ganzer Körper besteht aus Muskeln. Auch\nwenn es nur so groß wie ein Menschenkind ist,\nkann es 100 Erwachsene jonglieren.",
		'pt-br': "Seu corpo é inteiramente composto por músculos.\nApesar de ter o tamanho de uma criança humana,\nconsegue arremessar 100 adultos.",
		ko: "몸집은 어린아이만 하지만\n온몸이 근육으로 되어 있어서\n어른 100명은 날려 버릴 수 있다."
	}
}

export default card
