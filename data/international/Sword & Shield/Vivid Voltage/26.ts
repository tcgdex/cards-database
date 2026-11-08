import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [136],

	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'es-es': "Flareon",
		'it-it': "Flareon",
		'pt-br': "Flareon",
		'de-de': "Flamara"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Fire",
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
				'en-us': "Incandescent Awakening",
				'fr-fr': "Éveil Incandescent",
				'es-es': "Despertar Incandescente",
				'it-it': "Risveglio Incandescente",
				'pt-br': "Despertar Incandescente",
				'de-de': "Weißglühendes Erwachen"
			},
			effect: {
				'en-us': "If this Pokémon has a Memory Capsule attached, Grass Pokémon in play (both yours and your opponent's) have no Abilities.",
				'fr-fr': "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Grass en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
				'es-es': "Si este Pokémon tiene 1 Cápsula de Memoria unida a él, los Pokémon Grass en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
				'it-it': "Se questo Pokémon ha una carta Capsula della Memoria assegnata, i Pokémon Grass in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
				'pt-br': "Se este Pokémon tiver 1 Cápsula de Memória ligada a ele, Pokémon Grass em jogo (seus e do seu oponente) não terão Habilidades.",
				'de-de': "Wenn an dieses Pokémon eine Gedächtniskapsel angelegt ist, haben Grass-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Mane",
				'fr-fr': "Crinière de Feu",
				'es-es': "Crin de Fuego",
				'it-it': "Criniera di Fuoco",
				'pt-br': "Crina de Fogo",
				'de-de': "Flammenmähne"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Once it has stored up enough heat, this Pokémon's body temperature can reach up to 1,700 degrees Fahrenheit."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511550,
				tcgplayer: 226396
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511550,
				tcgplayer: 226396
			}
		},
	],
}

export default card
