import { Card } from "models/database/card"
import Set from "../Promos-A"
const card: Card = {
	set: Set,

	name: {
		'en-us': "Staraptor",
		'fr-fr': "Étouraptor",
		'es-es': "Staraptor",
		'it-it': "Staraptor",
		'de-de': "Staraptor",
		'ko-kr': "찌르호크",
		'pt-br': "Staraptor"
	},

	illustrator: "Hasuno",
	rarity: "None",
	category: "Pokemon",

	dexId: [398],
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Staravia"
	},

	description: {
		'en-us': "When Staravia evolve into Staraptor, they leave\nthe flock to live alone. They have sturdy wings.",
		'fr-fr': "Quand Étourvol évolue en Étouraptor, il quitte son groupe\npour vivre seul. Ses ailes sont très souples et puissantes.",
		'es-es': "Al evolucionar a Staraptor, deja su bandada y\npasa a vivir en soledad. Sus alas son inmensas.",
		'it-it': "Non appena si evolve, lascia lo stormo e affronta la\nvita da solo. Le sue ali sono estremamente robuste.",
		'de-de': "Entwickelt sich Staravia zu Staraptor, verlässt es\nden Schwarm und lebt allein. Die Spannweite\nseiner Flügel ist gigantisch.",
		'ko-kr': "찌르호크가 되면 무리에서\n떨어져 혼자서 살아간다.\n강인한 날개를 가지고 있다.",
		'pt-br': "Quando um Staravia evolui para Staraptor,\ndeixa o bando para viver sozinho. Têm asas robustas."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Wing Attack",
			'fr-fr': "Cru-Ailes",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'de-de': "Flügelschlag",
			'ko-kr': "날개치기",
			'pt-br': "Ataque de Asa"
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
			'en-us': "Defensive Whirlwind",
			'fr-fr': "Cyclone Défensif",
			'es-es': "Ciclón Defensivo",
			'it-it': "Difesa Turbinante",
			'de-de': "Schützender Wirbelwind",
			'ko-kr': "선풍 가드",
			'pt-br': "Turbilhão Defensivo"
		},
		effect: {
			'en-us': "This Pokémon takes −30 damage from attacks from {F} Pokémon.",
			'fr-fr': "Ce Pokémon subit − 30 dégâts provenant des attaques des Pokémon {F}.",
			'es-es': "Los ataques de Pokémon {F} hacen -30 puntos de daño a este Pokémon.",
			'it-it': "Questo Pokémon subisce -30 danni dagli attacchi dei Pokémon {F}.",
			'de-de': "Diesem Pokémon werden durch Attacken von {F}-Pokémon − 30 Schadenspunkte zugefügt.",
			'ko-kr': "이 포켓몬이 {F}포켓몬으로부터 받는 기술의 데미지를 -30한다.",
			'pt-br': "Este Pokémon recebe −30 pontos de dano de ataques de Pokémon {F}."
		}
	}],

	boosters: ["vol5"]
}
export default card