import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Rillaboom",
		fr: "Gorythmic",
		es: "Rillaboom",
		it: "Rillaboom",
		pt: "Rillaboom",
		de: "Gortrom"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Thwackey",
		fr: "Badabouin",
		es: "Thwackey",
		it: "Thwackey",
		pt: "Thwackey",
		de: "Chimstix"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Voltage Beat",
				fr: "Rythme Voltaïque",
				es: "Ritmo Voltaje",
				it: "Battuta Folgorante",
				pt: "Ritmo Voltaico",
				de: "Blitztrommeln"
			},
			effect: {
				en: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
				fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie Grass, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Grass y unirlas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia Grass e assegnarle a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante o seu turno, você poderá procurar por até 2 cartas de Energia Grass no seu baralho e ligá-las a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Grass-Energiekarten durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck."
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
				en: "Hammer In",
				fr: "Enfoncement",
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
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		en: "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle."
	},

	dexId: [812]
}

export default card
