import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Alolan Dugtrio",
		'fr-fr': "Triopikeur d’Alola",
		'es-es': "Dugtrio de Alola",
		'it-it': "Dugtrio di Alola",
		'pt-br': "Dugtrio de Alola",
		'de-de': "Alola-Digdri"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d’Alola",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Tangling Hair",
				'fr-fr': "Mèche Rebelle",
				'es-es': "Rizos Rebeldes",
				'it-it': "Boccolidoro",
				'pt-br': "Cabelo Desgrenhado",
				'de-de': "Lockenkopf"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon’s Retreat Cost is Colorless more.",
				'fr-fr': "Le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de Colorless.",
				'es-es': "El Coste de Retirada del Pokémon Activo de tu rival es de Colorless más.",
				'it-it': "Il costo di ritirata del Pokémon attivo del tuo avversario aumenta di Colorless.",
				'pt-br': "O custo de Recuo do Pokémon Ativo do seu oponente é Colorless a mais.",
				'de-de': "Die Rückzugskosten des Aktiven Pokémon deines Gegners erhöhen sich um Colorless."
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
				'en-us': "Dig Under",
				'fr-fr': "Terrassement",
				'es-es': "Enterrarse",
				'it-it': "Attacco Sotterraneo",
				'pt-br': "Solapar",
				'de-de': "Schaufel unter"
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza ou Resistência.",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		'en-us': "Its shining gold hair provides it with protection. It's reputed that keeping any of its fallen hairs will bring bad luck.",
	},

	thirdParty: {
		cardmarket: 295398,
		tcgplayer: 126959
	}
}

export default card
