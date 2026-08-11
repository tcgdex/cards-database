import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'de-de': "Machollo",
		'pt-br': "Machop",
		'ko-kr': "알통몬"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [66],
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "Its whole body is composed of muscles. Even though it's the size of a human child, it can hurl 100 grown-ups.",
		'fr-fr': "Son corps est essentiellement composé de muscles.\nMême s'il fait la taille d'un petit enfant,\nil peut soulever 100 adultes avec ses bras.",
		'es-es': "Es una masa de músculos y, pese a su\npequeño tamaño, tiene fuerza de sobra\npara levantar en brazos a 100 personas.",
		'it-it': "Il suo corpo è formato interamente da\nmuscoli. Non è più alto di un bambino,\nma può sollevare e lanciare 100 adulti.",
		'de-de': "Sein ganzer Körper besteht aus Muskeln. Auch\nwenn es nur so groß wie ein Menschenkind ist,\nkann es 100 Erwachsene jonglieren.",
		'pt-br': "Seu corpo é inteiramente composto por músculos.\nApesar de ter o tamanho de uma criança humana,\nconsegue arremessar 100 adultos.",
		'ko-kr': "몸집은 어린아이만 하지만\n온몸이 근육으로 되어 있어서\n어른 100명은 날려 버릴 수 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Knuckle Punch",
			'fr-fr': "Coud'Phalange",
			'es-es': "Puño con Nudillos",
			'it-it': "Noccapugno",
			'de-de': "Knöchelhieb",
			'pt-br': "Soco com Punho",
			'ko-kr': "꿀밤"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card