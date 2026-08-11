import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'es-es': "Dragonite",
		'it-it': "Dragonite",
		'pt-br': "Dragonite",
		'de-de': "Dragoran"
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
		'en-us': "Dragonair",
		'fr-fr': "Draco",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
			],
			name: {
				'en-us': "Dragon Wave",
				'fr-fr': "Vague de Dragon",
				'es-es': "Ola de Dragón",
				'it-it': "Ondadrago",
				'pt-br': "Onda de Dragão",
				'de-de': "Drachenwelle"
			},
			effect: {
				'en-us': "Discard a Grass Energy and a Lightning Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie Grass et une Énergie Lightning de ce Pokémon.",
				'es-es': "Descarta 1 Energía Grass y 1 Energía Lightning de este Pokémon.",
				'it-it': "Scarta un’Energia Grass e un’Energia Lightning assegnate a questo Pokémon.",
				'pt-br': "Descarte 1 Energia Grass e 1 Energia Lightning deste Pokémon.",
				'de-de': "Lege 1 Grass-Energie sowie 1 Lightning-Energie von diesem Pokémon auf deinen Ablagestapel."
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
				'en-us': "Giant Tail",
				'fr-fr': "Longue Queue",
				'es-es': "Cola Gigante",
				'it-it': "Gigacoda",
				'pt-br': "Cauda Gigante",
				'de-de': "Riesenschweif"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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

	description: {
		'en-us': "Incur the wrath of this normally calm Pokémon at your peril, because it will smash everything to smithereens before it's satisfied.",
	},

	thirdParty: {
		cardmarket: 295407,
		tcgplayer: 126968
	}
}

export default card
