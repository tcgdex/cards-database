import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Virovent",
		en: "Bramblin",
		es: "Bramblin",
		it: "Bramblin",
		pt: "Bramblin",
		de: "Weherba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Chevauchée Éolienne",
			en: "Ride the Wind",
			es: "Rodar al Viento",
			it: "Cavalcavento",
			pt: "Navegação dos Ventos",
			de: "Mit dem Wind wehen"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			en: "Flip a coin. If heads, switch this Pokémon with 1 of your Benched Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Lancia una moneta. Se esce testa, scambia questo Pokémon con uno della tua panchina.",
			pt: "Jogue uma moeda. Se sair cara, troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Wirf 1 Münze. Tausche bei Kopf dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card