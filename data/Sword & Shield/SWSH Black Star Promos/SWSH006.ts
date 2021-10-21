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
				pt: "Voltage Beat",
				de: "Blitztrommeln"
			},
			effect: {
				fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie Grass, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				en: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
				es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Grass y unirlas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia Grass e assegnarle a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
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
				fr: "Enfoncement",
				en: "Hammer In",
				es: "Martillear",
				it: "Martello",
				pt: "Hammer In",
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
		fr: "Badabouin"
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
