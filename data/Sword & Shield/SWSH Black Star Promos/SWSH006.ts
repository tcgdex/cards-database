import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Gorythmic",
		en: "Rillaboom",
		es: "Rillaboom",
		it: "Rillaboom",
		pt: "Rillaboom",
		de: "Gortrom"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
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
				fr: "Rythme Voltaïque",
				en: "Voltage Beat",
				es: "Ritmo Voltaje",
				it: "Battuta Folgorante",
				pt: "Ritmo Voltaico",
				de: "Blitztrommeln"
			},
			effect: {
				fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie {G}, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				en: "Once during your turn, you may search your deck for up to 2 {G} Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
				es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía {G} y unirlas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia {G} e assegnarle a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante o seu turno, você poderá procurar por até 2 cartas de Energia {G} no seu baralho e ligá-las a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 {G}-Energiekarten durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck."
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
				fr: "Enfoncement",
				en: "Hammer In",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
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
		en: "Thwackey",
		fr: "Badabouin",
		de: "Chimstix",
		es: "Thwackey",
		pt: "Thwackey",
		it: "Thwackey"
	},

	description: {
		en: "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle."
	},

	dexId: [812],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
