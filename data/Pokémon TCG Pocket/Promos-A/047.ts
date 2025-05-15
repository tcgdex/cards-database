import { Card } from "../../../interfaces"
import Set from "../Promos-A"

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

	illustrator: "Hasuno",
	rarity: "None",
	category: "Pokemon",
	hp: 140,
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
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			de: "Flügelschlag",
			'pt-br': "Ataque de Asa",
			ko: "날개치기"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	abilities: [{
		type: "Ability",

		name: {
			en: "Defensive Whirlwind",
			fr: "Cyclone Défensif",
			es: "Ciclón Defensivo",
			it: "Difesa Turbinante",
			de: "Schützender Wirbelwind",
			'pt-br': "Turbilhão Defensivo",
			ko: "선풍 가드"
		},

		effect: {
			en: "This Pokémon takes −30 damage from attacks from {F} Pokémon.",
			fr: "Ce Pokémon subit − 30 dégâts provenant des attaques des Pokémon {F}.",
			es: "Los ataques de Pokémon {F} hacen -30 puntos de daño a este Pokémon.",
			it: "Questo Pokémon subisce -30 danni dagli attacchi dei Pokémon {F}.",
			de: "Diesem Pokémon werden durch Attacken von {F}-Pokémon − 30 Schadenspunkte zugefügt.",
			'pt-br': "Este Pokémon recebe −30 pontos de dano de ataques de Pokémon .",
			ko: "이 포켓몬이 {F}포켓몬으로부터 받는 기술의 데미지를 -30한다.",
			'pt-br': "Este Pokémon recebe −30 pontos de dano de ataques de Pokémon {F}."
		}
	}]
}

export default card
