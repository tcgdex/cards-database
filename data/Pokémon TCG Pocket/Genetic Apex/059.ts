import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		de: "Quapsel",
		'pt-br': "Poliwag",
		ko: "발챙이"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Razor Fin",
			fr: "Aileron-Rasoir",
			es: "Aleta Afilada",
			it: "Pinnalama",
			de: "Rasierflosse",
			'pt-br': "Barbatana Cortante",
			ko: "지느러미 커터"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon's innards showing through the skin.",
		fr: "Il est plus à l'aise dans l'eau que sur la terre ferme.\nLe motif de spirale sur son ventre est en fait une\npartie de ses organes visibles à travers la peau.",
		es: "Es más ágil en el agua que en la tierra.\nLa espiral de su vientre no es más que parte\nde sus vísceras que se ven a través de la piel.",
		it: "È più portato per il nuoto che per la corsa.\nIl motivo spiraliforme sul ventre è parte dei\nsuoi organi interni visibili in trasparenza.",
		de: "Quapsel kann besser schwimmen als laufen.\nDas Spiralmuster auf seinem Bauch ist ein Teil\nseiner Innereien, der durch die Haut sichtbar ist.",
		'pt-br': "Para Poliwag, nadar é mais fácil do que andar.\nA espiral em sua barriga é, na verdade, parte dos órgãos\ndeste Pokémon que pode ser vista através de sua pele.",
		ko: "걷기보다 헤엄치기가 특기다.\n배의 소용돌이 모양은\n내장의 일부가 비쳐 보이는 것이다."
	},

	boosters: ["charizard"]
}

export default card
