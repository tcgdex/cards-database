import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Gorythmic",
		'en-us': "Rillaboom",
		'es-es': "Rillaboom",
		'it-it': "Rillaboom",
		'pt-br': "Rillaboom",
		'de-de': "Gortrom"
	},

	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Grass",
	],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'fr-fr': "Rythme Voltaïque",
				'en-us': "Voltage Beat",
				'es-es': "Ritmo Voltaje",
				'it-it': "Battuta Folgorante",
				'pt-br': "Ritmo Voltaico",
				'de-de': "Blitztrommeln"
			},
			effect: {
				'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie {G}, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				'en-us': "Once during your turn, you may search your deck for up to 2 {G} Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
				'es-es': "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía {G} y unirlas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia {G} e assegnarle a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante o seu turno, você poderá procurar por até 2 cartas de Energia {G} no seu baralho e ligá-las a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 {G}-Energiekarten durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'fr-fr': "Enfoncement",
				'en-us': "Hammer In",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	evolveFrom: {
		'en-us': "Thwackey",
		'fr-fr': "Badabouin",
		'de-de': "Chimstix",
		'es-es': "Thwackey",
		'pt-br': "Thwackey",
		'it-it': "Thwackey"
	},

	description: {
		'en-us': "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle."
	},

	dexId: [812],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 437154
	}
}

export default card
