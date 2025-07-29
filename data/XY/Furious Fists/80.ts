import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Evolution",
				fr: "Évolution de l'Énergie",
				es: "Evolución de Energía",
				it: "Evoluzione Energetica",
				pt: "Evolução por Energia",
				de: "Energie-Evolution"
			},
			effect: {
				en: "When you attach a basic Energy card from your hand to this Pokémon, you may search your deck for a card that evolves from this Pokémon that is the same type as that Energy card and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				fr: "Lorsque vous attachez une carte Énergie de base de votre main à ce Pokémon, vous pouvez chercher dans votre deck une carte Évolution de ce Pokémon du même type que la carte Énergie et la placer sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
				es: "Cuando unas 1 carta de Energía Básica de tu mano a este Pokémon, puedes buscar en tu baraja 1 carta que evolucione de este Pokémon y que sea del mismo tipo que esa carta de Energía y puedes ponerla sobre este Pokémon. (Esto equivale a hacer evolucionar a este Pokémon). Baraja las cartas de tu baraja después.",
				it: "Quando assegni una carta Energia base dalla tua mano a questo Pokémon, puoi cercare nel tuo mazzo una carta che si evolve da questo Pokémon che sia dello stesso tipo della carta Energia che hai assegnato a questo Pokémon e mettergliela sopra (quest'azione vale come evoluzione del Pokémon). Poi rimischia le carte del tuo mazzo.",
				pt: "Ao ligar um card de Energia básica da sua mão a este Pokémon, você poderá procurar em seu baralho um card que evolua desse Pokémon e seja do mesmo tipo que esse card de Energia e, em seguida, colocá-lo nesse Pokémon. (Isso conta como evoluir esse Pokémon.) Em seguida, embaralhe seus cards.",
				de: "Wenn du 1 Basis-Energiekarte von deiner Hand an dieses Pokémon anlegst, kannst du dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt und die denselben Energietyp wie diese Energiekarte hat, durchsuchen und sie auf dieses Pokémon legen. (Dies zählt als Entwicklung dieses Pokémon.) Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281744
	}
}

export default card
