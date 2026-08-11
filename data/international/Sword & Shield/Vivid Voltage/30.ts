import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [134],

	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'es-es': "Vaporeon",
		'it-it': "Vaporeon",
		'pt-br': "Vaporeon",
		'de-de': "Aquana"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Torrential Awakening",
				'fr-fr': "Éveil Torrentiel",
				'es-es': "Despertar Torrencial",
				'it-it': "Risveglio Torrenziale",
				'pt-br': "Despertar Torrencial",
				'de-de': "Reißendes Erwachen"
			},
			effect: {
				'en-us': "If this Pokémon has a Memory Capsule attached, Fire Pokémon in play (both yours and your opponent's) have no Abilities.",
				'fr-fr': "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Fire en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
				'es-es': "Si este Pokémon tiene 1 Cápsula de Memoria unida a él, los Pokémon Fire en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
				'it-it': "Se questo Pokémon ha una carta Capsula della Memoria assegnata, i Pokémon Fire in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
				'pt-br': "Se este Pokémon tiver 1 Cápsula de Memória ligada a ele, Pokémon Fire em jogo (seus e do seu oponente) não terão Habilidades.",
				'de-de': "Wenn an dieses Pokémon eine Gedächtniskapsel angelegt ist, haben Fire-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde Boréale",
				'es-es': "Rayo Aurora",
				'it-it': "Raggiaurora",
				'pt-br': "Raio Aurora",
				'de-de': "Aurorastrahl"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "When Vaporeon's fins begin to vibrate, it is a sign that rain will come within a few hours."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511570,
				tcgplayer: 226405
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511570,
				tcgplayer: 226405
			}
		},
	],
}

export default card
