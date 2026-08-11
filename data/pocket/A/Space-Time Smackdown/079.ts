import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cresselia",
		'fr-fr': "Cresselia",
		'es-es': "Cresselia",
		'it-it': "Cresselia",
		'de-de': "Cresselia",
		'pt-br': "Cresselia",
		'ko-kr': "크레세리아"
	},

	illustrator: "Masako Tomii",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [488],
	hp: 110,
	types: ["Psychic"],

	description: {
		'en-us': "Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.",
		'fr-fr': "Ses ailes libèrent un rideau de particules brillantes.\nCe Pokémon symboliserait le croissant de lune.",
		'es-es': "Sus alas emiten un velo de partículas brillantes.\nSe dice que representa un cuarto lunar.",
		'it-it': "Volando rilascia un velo di particelle brillanti.\nSi dice che rappresenti la luna crescente.",
		'de-de': "Seine Flügel geben schimmernde Partikel ab,\ndie wie ein Schleier herabrieseln. Man sagt,\nes verkörpere die Mondsichel.",
		'pt-br': "Suas asas liberam partículas brilhantes como um véu.\nDizem que representa a lua crescente.",
		'ko-kr': "비행할 때는 베일 같은\n날개에서 빛나는 입자를 낸다.\n초승달의 화신으로 불리고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Moonlight Gain",
			'fr-fr': "Soin au Clair de Lune",
			'es-es': "Ganancia Lunar",
			'it-it': "Cura Lunare",
			'de-de': "Mondlichtabsorption",
			'pt-br': "Ganho de Luar",
			'ko-kr': "문라이트게인"
		},

		damage: 50,
		cost: ["Psychic", "Psychic"],

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'ko-kr': "이 포켓몬의 HP를 20회복."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["palkia"]
}

export default card
