import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Pyroar",
		fr: "Némélios",
		es: "Pyroar",
		it: "Pyroar",
		pt: "Pyroar",
		de: "Pyroleo"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
				es: "Triturar",
				it: "Sgranocchio",
				pt: "Mastigada",
				de: "Knirscher"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
				es: "Explosión de Calor",
				it: "Caldobomba",
				pt: "Raio de Calor",
				de: "Hitzestoß"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365691
	}
}

export default card
