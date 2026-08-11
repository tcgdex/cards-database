import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [15],

	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'es-es': "Beedrill",
		'it-it': "Beedrill",
		'pt-br': "Beedrill",
		'de-de': "Bibor"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'es-es': "Kakuna",
		'it-it': "Kakuna",
		'pt-br': "Kakuna",
		'de-de': "Kokuna"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Elusive Master",
				'fr-fr': "Maître Évasif",
				'es-es': "Maestría de Evasión",
				'it-it': "Maestro Sfuggente",
				'pt-br': "Mestre Evasivo",
				'de-de': "Meisterzug"
			},
			effect: {
				'en-us': "Once during your turn, if this Pokémon is the last card in your hand, you may play it onto your Bench. If you do, draw 3 cards.",
				'fr-fr': "Une fois pendant votre tour, si ce Pokémon est votre dernière carte en main, vous pouvez le placer sur votre Banc. Dans ce cas, piochez 3 cartes.",
				'es-es': "Una vez durante tu turno, si este Pokémon es la última carta en tu mano, puedes jugarlo a tu Banca. Si lo haces, roba 3 cartas.",
				'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è l'ultima carta che hai in mano, puoi giocarlo e metterlo in panchina. Se lo fai, pesca tre carte.",
				'pt-br': "Uma vez durante o seu turno, se este Pokémon for a última carta na sua mão, você poderá colocá-lo no seu Banco. Se fizer isto, compre 3 cartas.",
				'de-de': "Einmal während deines Zuges, wenn dieses Pokémon die letzte Karte auf deiner Hand ist, kannst du es auf deine Bank spielen. Wenn du das machst, ziehe 3 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Sting",
				'fr-fr': "Piqûre Pointue",
				'es-es': "Aguijón Afilado",
				'it-it': "Tagliospina",
				'pt-br': "Ferroada Afiada",
				'de-de': "Scharfer Stich"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "Stage2",

	description: {
		'en-us': "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511435,
				tcgplayer: 226362
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511435,
				tcgplayer: 226362
			}
		},
	],
}

export default card
