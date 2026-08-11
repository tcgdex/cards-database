import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Shieldon",
		fr: "Dinoclier",
		es: "Shieldon",
		'es-mx': "Shieldon",
		de: "Schilterus",
		it: "Shieldon",
		pt: "Shieldon"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [410],
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Antique Armor Fossil"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Smithereen Smash",
			fr: "Pulvérisation",
			es: "Machaque",
			'es-mx': "Aplastamiento Total",
			de: "Splitterschlag",
			it: "Frammentazione",
			pt: "Pancada Estilhaçante"
		},

		cost: ["Metal", "Colorless"],

		damage: 50,

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895846,
				tcgplayer: 704818
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895846,
				tcgplayer: 704818
			}
		},
	],
}

export default card
