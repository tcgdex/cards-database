import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali",
		'es-es': "Glaceon",
		'it-it': "Glaceon",
		'pt-br': "Glaceon",
		'de-de': "Glaziola"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Freeze Zone",
				'fr-fr': "Zone de Gel",
				'es-es': "Congelar Zona",
				'it-it': "Freddezza",
				'pt-br': "Zona de Congelamento",
				'de-de': "Frostzone"
			},
			effect: {
				'en-us': "The Retreat Cost of each of your Team Plasma Pokémon in play is ColorlessColorless less.",
				'fr-fr': "Le coût de Retraite de chacun de vos Pokémon de la Team Plasma en jeu est diminué de ColorlessColorless.",
				'es-es': "El Coste de Retirada de cada uno de tus Pokémon del Equipo Plasma en juego es de ColorlessColorless menos.",
				'it-it': "Il costo di ritirata di ciascun Pokémon Team Plasma in gioco scende di ColorlessColorless.",
				'pt-br': "O Custo para Recuar de cada um de seus Pokémon da Equipe Plasma em jogo será de Colorless Colorless a menos.",
				'de-de': "Die Rückzugskosten aller Team-Plasma-Pokémon im Spiel verringern sich um Colorless Colorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent Glace",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lowers its body heat to freeze its fur. The hairs then become like needles it can fire.",
	},

	thirdParty: {
		cardmarket: 280901,
		tcgplayer: 85749
	}
}

export default card
