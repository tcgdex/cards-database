import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Florges EX",
		fr: "Florges EX",
		es: "Florges EX",
		it: "Florges EX",
		pt: "Florges EX",
		de: "Florges EX"
	},

	illustrator: "Eske Yoshinob",
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
				en: "Lead",
				fr: "Mentor",
				es: "Liderazgo",
				it: "Guidare",
				pt: "Liderar",
				de: "Führen"
			},
			effect: {
				en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure um card de Apoiador em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Bright Garden",
				fr: "Jardin Radieux",
				es: "Jardín Florido",
				it: "Giardinlucente",
				pt: "Jardim Reluzente",
				de: "Blühender Garten"
			},
			effect: {
				en: "This attack does 20 damage times the number of Grass Pokémon and Fairy Pokémon you have in play.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon Grass et de Pokémon Fairy que vous avez en jeu.",
				es: "Este ataque hace 20 puntos de daño por cada Pokémon Grass y Pokémon Fairy que tengas en juego.",
				it: "Questo attacco infligge 20 danni per ogni Pokémon Grass e Fairy che hai in gioco.",
				pt: "Este ataque causa 20 de danos vezes o número de Pokémon Grass e Pokémon Fairy que você tem em jogo.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Grass-Pokémon und Fairy-Pokémon, die du im Spiel hast, zu."
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
		cardmarket: 281873
	}
}

export default card
