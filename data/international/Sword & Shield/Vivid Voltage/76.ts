import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [547],

	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Triple Draw",
				'fr-fr': "Triple Pioche",
				'es-es': "Triple Robo",
				'it-it': "Pescata Tripla",
				'pt-br': "Compra Tripla",
				'de-de': "Dreifachzug"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'es-es': "Roba 3 cartas.",
				'it-it': "Pesca tre carte.",
				'pt-br': "Compre 3 cartas.",
				'de-de': "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Flying Fury",
				'fr-fr': "Furie Volante",
				'es-es': "Furia Voladora",
				'it-it': "Furia Volante",
				'pt-br': "Fúria Alada",
				'de-de': "Fliegende Furie"
			},
			effect: {
				'en-us': "Before doing damage, you may discard any number of Pokémon Tools from your Pokémon. This attack does 40 more damage for each card you discarded in this way.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez défausser autant de cartes Outil Pokémon que vous le voulez de vos Pokémon. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				'es-es': "Antes de infligir daño, puedes descartar cualquier cantidad de Herramientas Pokémon de tus Pokémon. Este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
				'it-it': "Prima di infliggere danni, puoi scartare un numero qualsiasi di carte Oggetto Pokémon dai tuoi Pokémon. Questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
				'pt-br': "Antes de causar dano, você poderá descartar qualquer número de Ferramentas Pokémon dos seus Pokémon. Este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma.",
				'de-de': "Bevor du Schaden zufügst, kannst du beliebig viele Pokémon-Ausrüstungen von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "Stage1",

	description: {
		'en-us': "It scatters cotton all over the place as a prank. If it gets wet, it'll become too heavy to move and have no choice but to answer for its mischief."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511800,
				tcgplayer: 226484
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511800,
				tcgplayer: 226484
			}
		},
	],
}

export default card
