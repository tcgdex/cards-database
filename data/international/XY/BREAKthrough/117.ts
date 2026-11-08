import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'es-es': "Dodrio",
		'it-it': "Dodrio",
		'pt-br': "Dodrio",
		'de-de': "Dodri"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'es-es': "Doduo",
		'it-it': "Doduo",
		'pt-br': "Doduo",
		'de-de': "Dodu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Retreat Aid",
				'fr-fr': "Soutien de Retraite",
				'es-es': "Ayuda de Retirada",
				'it-it': "Assistente alla Ritirata",
				'pt-br': "Ajuda para Recuar",
				'de-de': "Rückzugshilfe"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
				'es-es': "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Activo es de ColorlessColorless menos.",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon attivo è ridotto di ColorlessColorless.",
				'pt-br': "Enquanto este Pokémon estiver no seu Banco, o Custo para Recuar do seu Pokémon Ativo é ColorlessColorless menor.",
				'de-de': "Solang sich dieses Pokémon auf deiner Bank befindet, verringern sich die Rückzugskosten deines Aktiven Pokémon um ColorlessColorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie",
				'es-es': "Ataque Furia",
				'it-it': "Furia",
				'pt-br': "Ataque de Fúria",
				'de-de': "Furienschlag"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 40 de danos vezes o número de caras.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "An odd species that is rarely found. The three heads respectively represent joy, sadness, and anger.",
	},

	thirdParty: {
		cardmarket: 286363,
		tcgplayer: 107237
	}
}

export default card
