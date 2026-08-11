import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sparkling Induction",
				'fr-fr': "Induction Étincelante",
				'es-es': "Inducción Centelleante",
				'it-it': "Induzione Scintillante",
				'pt-br': "Indução Cintilante",
				'de-de': "Funkelnde Induktion"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, its Retreat Cost is Colorless less for each Magnemite on your Bench.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, son Coût de Retraite est diminué de Colorless pour chaque Magnéti sur votre Banc.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, su Coste de Retirada es de Colorless menos por cada Magnemite en tu Banca.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, il suo costo di ritirata è ridotto di Colorless per ogni Magnemite nella tua panchina.",
				'pt-br': "Enquanto este Pokémon for seu Pokémon Ativo, seu Custo para Recuar é Colorless menor para cada Magnemite em seu Banco.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, verringern sich die Rückzugskosten um Colorless für jedes Magnetilo auf deiner Bank."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule Éclair",
				'es-es': "Bola Relámpago",
				'it-it': "Fulminpalla",
				'pt-br': "Bola de Raios",
				'de-de': "Kugelblitz"
			},

			damage: 20,

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
		'en-us': "It moves while constantly hovering. It discharges Thunder Wave and so on from the units at its sides.",
	},

	thirdParty: {
		cardmarket: 286297,
		tcgplayer: 107170
	}
}

export default card
