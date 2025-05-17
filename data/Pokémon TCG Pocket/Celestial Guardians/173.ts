import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
		es: "Mudsdale",
		it: "Mudsdale",
		de: "Pampross",
		'pt-br': "Mudsdale",
		ko: "만마드"
	},

	illustrator: "Teeziro",
	rarity: "One Star",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mudbray"
	},

	description: {
		en: "This Pokémon has been treasured not just for its physical labor but also because it produces high-quality mud used for making pottery.",
		fr: "On l'apprécie aussi bien pour l'aide qu'il apporte\ndans les travaux physiques que pour l'excellente\nboue qu'il produit, idéale pour la poterie.",
		es: "Es muy apreciado por su utilidad en las labores físicas y por la alta\ncalidad del barro que produce, que es ideal para fabricar cerámica.",
		it: "È molto apprezzato sia per i lavori di fatica,\nsia per il fango che produce, così sopraffino\nda essere impiegato per realizzare vasellame.",
		de: "Es wird sehr für seine Schwerstarbeit und für das\nHerstellen von hochwertigem Schlamm geschätzt,\nder ein ideales Material für die Keramik darstellt.",
		'pt-br': "Este Pokémon não é apenas apreciado pelo seu esforço\nfísico, mas também por produzir lama de alta qualidade\nusada em cerâmicas.",
		ko: "힘쓰는 일뿐만 아니라\n도자기의 재료가 되는 질 좋은 진흙을\n만들기 때문에 소중히 여겨져 왔다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "High Horsepower",
			fr: "Cavalerie Lourde",
			es: "Fuerza Equina",
			it: "Forza Equina",
			de: "Pferdestärke",
			'pt-br': "Potência Equina",
			ko: "10만마력"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			en: "This Pokémon also does 40 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 40 dégâts.",
			es: "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 40 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			ko: "이 포켓몬에게도 40데미지를 준다."
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