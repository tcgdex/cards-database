import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Stoutland",
		'fr-fr': "Mastouffe",
		'es-es': "Stoutland",
		'it-it': "Stoutland",
		'pt-br': "Stoutland",
		'de-de': "Bissbark"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Stage2",
	illustrator: "Naoki Saito",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Intimidating Fang",
			'fr-fr': "Croc Intimidant",
			'es-es': "Colmillo Intimidatorio",
			'it-it': "Spaventazanna",
			'pt-br': "Intimidating Fang",
			'de-de': "Hammerhauer"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les attaques du Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los ataques del Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, gli attacchi del Pokémon attivo del tuo avversario infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, fügen die Attacken des Aktiven Pokémon deines Gegners 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Knock Away",
			'fr-fr': "Asticotage",
			'es-es': "Derribar",
			'it-it': "Scaraventa",
			'pt-br': "Knock Away",
			'de-de': "Zurückschlagen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 100 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 100 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 100 danni in più.",
			'pt-br': "Flip a coin. If heads, this attack does 100 more damage.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	dexId: [508],

	evolveFrom: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien",
		'es-es': "Herdier",
		'it-it': "Herdier",
		'pt-br': "Herdier",
		'de-de': "Terribark"
	},

	description: {
		'en-us': "Its fur is long and thick. A long time ago in cold regions, every household kept a Stoutland."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574193,
				tcgplayer: 246872
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574193,
				tcgplayer: 246872
			}
		},
	],
}

export default card
