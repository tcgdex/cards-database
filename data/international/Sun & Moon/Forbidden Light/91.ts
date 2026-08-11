import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Goomy",
		'fr-fr': "Mucuscule",
		'es-es': "Goomy",
		'it-it': "Goomy",
		'pt-br': "Goomy",
		'de-de': "Viscora"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		704,
	],

	hp: 40,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sticky Membrane",
				'fr-fr': "Membrane Gluante",
				'es-es': "Membrana Pegajosa",
				'it-it': "Membrana Viscosa",
				'pt-br': "Membrana Grudenta",
				'de-de': "Klebrige Membrane"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent’s Pokémon’s attacks cost Colorless more.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de votre adversaire coûtent Colorless de plus.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, los ataques de los Pokémon de tu rival cuestan Colorless más.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi dei Pokémon del tuo avversario costano Colorless in più.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, os ataques dos Pokémon do seu oponente custam Colorless a mais.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, erhöhen sich die Kosten der Attacken der Pokémon deines Gegners um Colorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its source of protection is its slimy, germ-laden mucous membrane. Anyone who touches it needs some thorough hand-washing.",
	},

	thirdParty: {
		cardmarket: 355605,
		tcgplayer: 165751
	}
}

export default card
