import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal",
		fr: "Melmetal",
		es: "Melmetal",
		it: "Melmetal",
		de: "Melmetal",
		'pt-br': "Melmetal",
		ko: "멜메탈"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [809],
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Hard Coat",
			fr: "Strate Dure",
			es: "Capa Resistente",
			it: "Patina Dura",
			de: "Schutzschicht",
			'pt-br': "Camada Resistente",
			ko: "하드코트"
		},

		effect: {
			en: "This Pokémon takes -20 damage from attacks.",
			fr: "Ce Pokémon subit − 20 dégâts provenant des attaques.",
			es: "Los ataques hacen -20 puntos de daño a este Pokémon.",
			it: "Questo Pokémon subisce -20 danni dagli attacchi.",
			de: "Diesem Pokémon werden durch Attacken − 20 Schadenspunkte zugefügt.",
			'pt-br': "Este Pokémon recebe −20 pontos de dano de ataques.",
			ko: "이 포켓몬이 받는 기술의 데미지를 -20한다."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			de: "Schwerer Einschlag",
			'pt-br': "Impacto Pesado",
			ko: "헤비임팩트"
		},

		damage: "120"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan.",
		fr: "En fin de vie, son corps rouille et se brise en mille morceaux.\nCes derniers renaissent ensuite sous forme de Meltan.",
		es: "Al final de su vida, su cuerpo se oxida y se\nhace pedazos. Poco tiempo después, estos\nfragmentos que quedan dan vida a varios Meltan.",
		it: "Alla fine della sua esistenza, si arrugginisce e\ncade a pezzi. Dopo un po' di tempo, i resti del\nsuo corpo tornano in vita sotto forma di Meltan.",
		de: "Geht sein Leben dem Ende zu, rostet sein Körper\nund fällt auseinander. Kurz darauf erwachen die\nverbliebenen Fragmente als Meltan zum Leben.",
		'pt-br': "No fim de sua vida, Melmetal enferrujará e se\ndespedaçará. Os pequenos cacos que ficarem\npara trás eventualmente renascerão como Meltan.",
		ko: "수명이 다하면 몸이 녹슬고\n붕괴한다. 이윽고 작은 파편이\n멜탄으로 부활한다."
	},

	boosters: ["charizard"]
}

export default card
