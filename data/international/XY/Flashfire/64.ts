import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		670,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
		'es-es': "Flabébé",
		'it-it': "Flabébé",
		'pt-br': "Flabébé",
		'de-de': "Flabébé"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flower Veil",
				'fr-fr': "Flora-Voile",
				'es-es': "Velo Flor",
				'it-it': "Fiorvelo",
				'pt-br': "Véu de Flores",
				'de-de': "Blütenhülle"
			},
			effect: {
				'en-us': "Each of your Grass Pokémon in play gets +20 HP.",
				'fr-fr': "Ajoute 20 PV à chacun de vos Pokémon Grass en jeu.",
				'es-es': "Cada uno de tus Pokémon Grass en juego obtiene 20 PS más.",
				'it-it': "Tutti i tuoi Pokémon Grass in gioco hanno 20 PS in più.",
				'pt-br': "Cada um dos seus Pokémon Grass em jogo recebe +20 PS.",
				'de-de': "Jedes deiner Grass-Pokémon im Spiel erhält +20 KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
				'es-es': "Viento Feérico",
				'it-it': "Vento di Fata",
				'pt-br': "Vento de Fada",
				'de-de': "Feenbrise"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It flutters around fields of flowers and cares for flowers that are starting to wilt. It draws out the hidden power of flowers to battle.",
	},

	thirdParty: {
		cardmarket: 281547,
		tcgplayer: 91201
	}
}

export default card
