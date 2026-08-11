import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Staraptor",
		fr: "Étouraptor",
		es: "Staraptor",
		it: "Staraptor",
		de: "Staraptor",
		'pt-br': "Staraptor",
		ko: "찌르호크"
	},

	illustrator: "Minahamu",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [398],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Staravia"
	},

	description: {
		en: "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
		fr: "Quand Étourvol évolue en Étouraptor, il quitte son groupe\npour vivre seul. Ses ailes sont très souples et puissantes.",
		es: "Al evolucionar a Staraptor, deja su bandada y\npasa a vivir en soledad. Sus alas son inmensas.",
		it: "Non appena si evolve, lascia lo stormo e affronta la\nvita da solo. Le sue ali sono estremamente robuste.",
		de: "Entwickelt sich Staravia zu Staraptor, verlässt es\nden Schwarm und lebt allein. Die Spannweite\nseiner Flügel ist gigantisch.",
		'pt-br': "Quando um Staravia evolui para Staraptor,\ndeixa o bando para viver sozinho. Têm asas robustas.",
		ko: "찌르호크가 되면 무리에서\n떨어져 혼자서 살아간다.\n강인한 날개를 가지고 있다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Brave Bird",
			fr: "Rapace",
			es: "Pájaro Osado",
			it: "Baldeali",
			de: "Sturzflug",
			'pt-br': "Pássaro Bravo",
			ko: "브레이브버드"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			ko: "이 포켓몬에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
