import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Xerneas",
		'fr-fr': "Xerneas",
		'es-es': "Xerneas",
		'it-it': "Xerneas",
		'pt-br': "Xerneas",
		'de-de': "Xerneas"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		716,
	],

	hp: 130,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'en-us': "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Bright Horns",
				'fr-fr': "Cornes Lumineuses",
				'es-es': "Cuernos Brillantes",
				'it-it': "Corna Splendenti",
				'pt-br': "Chifres Luminosos",
				'de-de': "Glänzendes Geweih"
			},
			effect: {
				'en-us': "This Pokémon can’t use Bright Horns during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Cornes Lumineuses pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Cuernos Brillantes durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Corna Splendenti.",
				'pt-br': "Este Pokémon não poderá usar Chifres Luminosos durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Glänzendes Geweih während deines nächsten Zuges nicht einsetzen."
			},
			damage: 130,

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

	description: {
		'en-us': "Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
	},

	thirdParty: {
		cardmarket: 311921,
		tcgplayer: 149099
	}
}

export default card
