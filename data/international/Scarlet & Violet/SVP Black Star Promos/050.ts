import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [65],
	set: Set,

	name: {
		'en-us': "Alakazam ex",
		'fr-fr': "Alakazam-ex",
		'es-es': "Alakazam ex",
		'it-it': "Alakazam-ex",
		'pt-br': "Alakazam ex",
		'de-de': "Simsala-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Kadabra",
		'fr-fr': "Kadabra",
		'es-es': "Kadabra",
		'it-it': "Kadabra",
		'pt-br': "Kadabra",
		'de-de': "Kadabra"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Mind Jack",
			'fr-fr': "Emprise Mentale",
			'es-es': "Levantamente",
			'it-it': "Sollevamente",
			'pt-br': "Tomada Mental",
			'de-de': "Gedankenstoß"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Dimensional Hand",
			'fr-fr': "Main Dimensionnelle",
			'es-es': "Mano Dimensional",
			'it-it': "Mano Dimensionale",
			'pt-br': "Mão Dimensional",
			'de-de': "Dimensionshand"
		},

		effect: {
			'en-us': "This attack can be used even if this Pokémon is on the Bench.",
			'fr-fr': "Cette attaque peut être utilisée même si ce Pokémon est sur le Banc.",
			'es-es': "Este ataque se puede usar incluso si este Pokémon está en la Banca.",
			'it-it': "Questo attacco può essere usato anche se questo Pokémon è in panchina.",
			'pt-br': "Este ataque pode ser usado mesmo que este Pokémon esteja no Banco.",
			'de-de': "Diese Attacke kann auch eingesetzt werden, wenn sich dieses Pokémon auf der Bank befindet."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "Mitsuhiro Arita",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 720394,
				tcgplayer: 518868
			},
		}
	],
}

export default card
