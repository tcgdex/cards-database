import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'es-es': "Sandile",
		'it-it': "Sandile",
		'pt-br': "Sandile",
		'de-de': "Ganovil"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		551,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Intimidating Fang",
				'fr-fr': "Croc Intimidant",
				'es-es': "Colmillo Intimidatorio",
				'it-it': "Spaventazanna",
				'pt-br': "Presa Intimidadora",
				'de-de': "Hammerhauer"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent’s Active Pokémon’s attacks do 20 less damage (before applying Weakness and Resistance).",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, los ataques del Pokémon Activo de tu rival hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi del Pokémon attivo del tuo avversario infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, os ataques do Pokémon Ativo do seu oponente causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, fügen die Attacken des Aktiven Pokémon deines Gegners 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 10,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Alola, where it's warm all year round, is a comfortable environment for this Pokémon. Sometimes you'll even see it outside of deserts.",
	},

	thirdParty: {
		cardmarket: 372403,
		tcgplayer: 189213
	}
}

export default card
