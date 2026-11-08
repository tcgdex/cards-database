import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'es-es': "Electrode",
		'it-it': "Electrode",
		'pt-br': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Continuous Tumble",
				'fr-fr': "Roulade Continue",
				'es-es': "Avalancha Continua",
				'it-it': "Capriole",
				'pt-br': "Tombo Contínuo",
				'de-de': "Dauerrollen"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 20 de danos vezes o número de caras.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Bomb",
				'fr-fr': "Bomb'Énergie",
				'es-es': "Bomba Energética",
				'it-it': "Energibomba",
				'pt-br': "Bomba de Energia",
				'de-de': "Energiebombe"
			},
			effect: {
				'en-us': "You may move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
				'fr-fr': "Vous pouvez déplacer toutes les Énergies de ce Pokémon vers vos Pokémon de Banc, de la manière que vous voulez.",
				'es-es': "Puedes mover toda la Energía de este Pokémon a tus Pokémon en Banca de la manera que desees.",
				'it-it': "Puoi spostare a piacimento tutte le Energie da questo Pokémon a quelli nella tua panchina.",
				'pt-br': "Você pode mover toda a Energia deste Pokémon para seus Pokémon no Banco do jeito que desejar.",
				'de-de': "Du kannst alle an dieses Pokémon angelegten Energien beliebig auf die Pokémon auf deiner Bank verschieben."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stores an overflowing amount of electric energy inside its body. Even a small shock makes it explode.",
	},

	thirdParty: {
		cardmarket: 282690,
		tcgplayer: 98058
	}
}

export default card
