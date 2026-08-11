import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Omastar",
		'fr-fr': "Amonistar",
		'es-es': "Omastar",
		'it-it': "Omastar",
		'pt-br': "Omastar",
		'de-de': "Amoroso"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Omanyte",
		'fr-fr': "Amonita",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fossil Bind",
				'fr-fr': "Lien Fossile",
				'es-es': "Atadura Fósil",
				'it-it': "Legame Fossile",
				'pt-br': "Atadura de Fóssil",
				'de-de': "Fossiler Griff"
			},
			effect: {
				'en-us': "As long as you have fewer Pokémon in play than your opponent, they can’t play any Item cards from their hand.",
				'fr-fr': "Tant que vous avez moins de Pokémon en jeu que votre adversaire, celui-ci ne peut pas jouer de cartes Objet de sa main.",
				'es-es': "Mientras tengas menos Pokémon en juego que tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
				'it-it': "Fintanto che hai meno Pokémon in gioco del tuo avversario, questi non può giocare le carte Strumento che ha in mano.",
				'pt-br': "Enquanto você tiver menos Pokémon em jogo do que seu oponente, ele(a) não pode jogar nenhuma carta de Item da própria mão.",
				'de-de': "Solang du weniger Pokémon im Spiel hast als dein Gegner, kann dein Gegner keine Itemkarten aus seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its heavy shell is thought to be the reason this ancient Pokémon died out. It's apparently a distant ancestor of Octillery.",
	},

	thirdParty: {
		cardmarket: 369006,
		tcgplayer: 183854
	}
}

export default card
