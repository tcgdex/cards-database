import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mudsdale",
		'fr-fr': "Bourrinos",
		'es-es': "Mudsdale",
		'it-it': "Mudsdale",
		'de-de': "Pampross",
		'pt-br': "Mudsdale",
		'ko-kr': "만마드"
	},

	illustrator: "Teeziro",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [750],
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Mudbray"
	},

	description: {
		'en-us': "This Pokémon has been treasured not just for its physical labor but also because it produces high-quality mud used for making pottery.",
		'fr-fr': "On l'apprécie aussi bien pour l'aide qu'il apporte\ndans les travaux physiques que pour l'excellente\nboue qu'il produit, idéale pour la poterie.",
		'es-es': "Es muy apreciado por su utilidad en las labores físicas y por la alta\ncalidad del barro que produce, que es ideal para fabricar cerámica.",
		'it-it': "È molto apprezzato sia per i lavori di fatica,\nsia per il fango che produce, così sopraffino\nda essere impiegato per realizzare vasellame.",
		'de-de': "Es wird sehr für seine Schwerstarbeit und für das\nHerstellen von hochwertigem Schlamm geschätzt,\nder ein ideales Material für die Keramik darstellt.",
		'pt-br': "Este Pokémon não é apenas apreciado pelo seu esforço\nfísico, mas também por produzir lama de alta qualidade\nusada em cerâmicas.",
		'ko-kr': "힘쓰는 일뿐만 아니라\n도자기의 재료가 되는 질 좋은 진흙을\n만들기 때문에 소중히 여겨져 왔다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "High Horsepower",
			'fr-fr': "Cavalerie Lourde",
			'es-es': "Fuerza Equina",
			'it-it': "Forza Equina",
			'de-de': "Pferdestärke",
			'pt-br': "Potência Equina",
			'ko-kr': "10만마력"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 40 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 40 dégâts.",
			'es-es': "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 40 danni a se stesso.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			'ko-kr': "이 포켓몬에게도 40데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["solgaleo"]
}

export default card