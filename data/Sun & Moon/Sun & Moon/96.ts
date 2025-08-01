import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		es: "Dragonite",
		it: "Dragonite",
		pt: "Dragonite",
		de: "Dragoran"
	},

	illustrator: "Hiroyuki Yamamoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
			],
			name: {
				en: "Dragon Wave",
				fr: "Vague de Dragon",
				es: "Ola de Dragón",
				it: "Ondadrago",
				pt: "Onda de Dragão",
				de: "Drachenwelle"
			},
			effect: {
				en: "Discard a Grass Energy and a Lightning Energy from this Pokémon.",
				fr: "Défaussez une Énergie Grass et une Énergie Lightning de ce Pokémon.",
				es: "Descarta 1 Energía Grass y 1 Energía Lightning de este Pokémon.",
				it: "Scarta un’Energia Grass e un’Energia Lightning assegnate a questo Pokémon.",
				pt: "Descarte 1 Energia Grass e 1 Energia Lightning deste Pokémon.",
				de: "Lege 1 Grass-Energie sowie 1 Lightning-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Tail",
				fr: "Longue Queue",
				es: "Cola Gigante",
				it: "Gigacoda",
				pt: "Cauda Gigante",
				de: "Riesenschweif"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 295407
	}
}

export default card
