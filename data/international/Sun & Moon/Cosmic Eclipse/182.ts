import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'pt-br': "Bewear",
		'de-de': "Kosturso"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		760,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Carry and Run",
				'fr-fr': "Attrape et Cours",
				'es-es': "Cargar y Correr",
				'it-it': "Piglia e Fuggi",
				'pt-br': "Pegar e Correr",
				'de-de': "Tragen und rennen"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, your Active Pokémon’s Retreat Cost is ColorlessColorless less.",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
				'es-es': "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Activo es de ColorlessColorless menos.",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon attivo è ridotto di ColorlessColorless.",
				'pt-br': "Enquanto este Pokémon estiver no seu Banco, o custo de Recuo do seu Pokémon Ativo será ColorlessColorless a menos.",
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
				'en-us': "Lariat",
				'fr-fr': "Lasso",
				'es-es': "Lazo",
				'it-it': "Lazo",
				'pt-br': "Laço",
				'de-de': "Lasso"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It waves its hands wildly in intimidation and warning. Life is over for anyone who doesn't run away as fast as possible.",
	},

	thirdParty: {
		cardmarket: 408534,
		tcgplayer: 201304
	}
}

export default card
