import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Florges EX",
		'fr-fr': "Florges EX",
		'es-es': "Florges EX",
		'it-it': "Florges EX",
		'pt-br': "Florges EX",
		'de-de': "Florges EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		671,
	],

	hp: 160,

	types: [
		"Fairy",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Lead",
				'fr-fr': "Mentor",
				'es-es': "Liderazgo",
				'it-it': "Guidare",
				'pt-br': "Liderar",
				'de-de': "Führen"
			},
			effect: {
				'en-us': "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure um card de Apoiador em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Bright Garden",
				'fr-fr': "Jardin Radieux",
				'es-es': "Jardín Florido",
				'it-it': "Giardinlucente",
				'pt-br': "Jardim Reluzente",
				'de-de': "Blühender Garten"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of Grass Pokémon and Fairy Pokémon you have in play.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon Grass et de Pokémon Fairy que vous avez en jeu.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon Grass y Pokémon Fairy que tengas en juego.",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon Grass e Fairy che hai in gioco.",
				'pt-br': "Este ataque causa 20 de danos vezes o número de Pokémon Grass e Pokémon Fairy que você tem em jogo.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Grass-Pokémon und Fairy-Pokémon, die du im Spiel hast, zu."
			},
			damage: "20×",

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

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281873,
		tcgplayer: 94685
	}
}

export default card
