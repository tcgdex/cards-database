import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Zeraora ex",
		fr: "Méga-Zeraora-ex",
		es: "Mega-Zeraora ex",
		de: "Mega-Zeraora-ex",
		it: "Mega Zeraora-ex",
		pt: "Mega Zeraora ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [807],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunderous Fist",
			fr: "Poing Foudroyant",
			es: "Puño Atronador",
			de: "Donnerfaust",
			it: "Pugno Tonante",
			pt: "Murro Trovejante",
		},

		effect: {
			en: "This attack does 60 damage for each {L} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie {L} attachée à ce Pokémon.",
			es: "Este ataque hace 60 puntos de daño por cada Energía {L} unida a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {L}-Energie 60 Schadenspunkte zu.",
			it: "Questo attacco infligge 60 danni per ogni Energia {L} assegnata a questo Pokémon.",
			pt: "Este ataque causa 60 pontos de dano para cada Energia {L} ligada a este Pokémon.",
		},

		damage: "60×"
	},
	{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Zepto Turn",
			fr: "Zepto Tour",
			es: "Zeptogiro",
			de: "Zeptowende",
			it: "Zeptovirata",
			pt: "Volta Veloz",
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 903672,
				tcgplayer: 710754
			}
		}
	],
}

export default card
