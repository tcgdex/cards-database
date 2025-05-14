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
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",
	evolveFrom: {
		en: "Meltan"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Hard Coat",
			fr: "Strate Dure"
		},

		effect: {
			en: "This Pokémon takes -20 damage from attacks.",
			fr: "Ce Pokémon subit − 20 dégâts provenant des attaques."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact"
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
	}
}

export default card
