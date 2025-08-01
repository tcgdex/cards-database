import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Xerneas",
		fr: "Xerneas",
		es: "Xerneas",
		it: "Xerneas",
		pt: "Xerneas",
		de: "Xerneas"
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
				en: "Lead",
				fr: "Mentor",
				es: "Liderazgo",
				it: "Guidare",
				pt: "Liderar",
				de: "Führen"
			},
			effect: {
				en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Bright Horns",
				fr: "Cornes Lumineuses",
				es: "Cuernos Brillantes",
				it: "Corna Splendenti",
				pt: "Chifres Luminosos",
				de: "Glänzendes Geweih"
			},
			effect: {
				en: "This Pokémon can’t use Bright Horns during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Cornes Lumineuses pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Cuernos Brillantes durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Corna Splendenti.",
				pt: "Este Pokémon não poderá usar Chifres Luminosos durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Glänzendes Geweih während deines nächsten Zuges nicht einsetzen."
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

	thirdParty: {
		cardmarket: 311921
	}
}

export default card
