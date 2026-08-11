import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [321],

	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'es-es': "Wailord",
		'it-it': "Wailord",
		'pt-br': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer",
		'de-de': "Wailmer"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Water Veil",
				'fr-fr': "Ignifu-Voile",
				'es-es': "Velo Agua",
				'it-it': "Idrovelo",
				'pt-br': "Véu de Água",
				'de-de': "Aquahülle"
			},
			effect: {
				'en-us': "Whenever you attach an Energy card from your hand to this Pokémon, it recovers from all Special Conditions.",
				'fr-fr': "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, il guérit de tous les États Spéciaux.",
				'es-es': "Cada que vez que unas 1 carta de Energía de tu mano a este Pokémon, elimina todas sus Condiciones Especiales.",
				'it-it': "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano, rimuovi tutte le condizioni speciali che lo influenzano.",
				'pt-br': "Sempre que você ligar um card de Energia da sua mão a este Pokémon, remova todas as Condições Especiais dele.",
				'de-de': "Jedes Mal, wenn du 1 Energiekarte von deiner Hand an dieses Pokémon anlegst, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
				'es-es': "Hidrobomba",
				'it-it': "Idropompa",
				'pt-br': "Jato d'Água",
				'de-de': "Hydropumpe"
			},
			effect: {
				'en-us': "This attack does 40 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				'es-es': "Este ataque hace 40 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 40 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 40 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It can sometimes knock out opponents with the shock created by breaching and crashing its big body onto the water."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511580,
				tcgplayer: 226411
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511580,
				tcgplayer: 226411
			}
		},
	],
}

export default card
