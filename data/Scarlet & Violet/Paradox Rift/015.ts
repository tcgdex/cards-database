import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Toedscool",
		fr: "Terracool",
		es: "Toedscool",
		it: "Toedscool",
		pt: "Toedscool",
		de: "Tentagra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Clinging Spore",
			fr: "Spore Agrippante",
			es: "Espora Pegajosa",
			it: "Spora Appiccicosa",
			pt: "Esporos Grudentos",
			de: "Haftspore"
		},

		effect: {
			en: "Attach a Basic Grass Energy card from your hand to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Grass de base de votre main à l'un de vos Pokémon de Banc.",
			es: "Une 1 carta de Energía Grass Básica de tu mano a uno de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base Grass dalla tua mano.",
			pt: "Ligue uma carta de Energia Grass Básica da sua mão a 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-Grass-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Vine Slap",
			fr: "Gifle de Liane",
			es: "Bofetón Látigo",
			it: "Lianasberla",
			pt: "Tapa de Vinhas",
			de: "Rankenklatscher"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card