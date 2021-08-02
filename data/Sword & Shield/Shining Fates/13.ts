import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Gorythmic",
		en: "Rillaboom",
		es: "Rillaboom",
		it: "Rillaboom",
		pt: "Rillaboom",
		de: "Gortrom"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		fr: "Badabouin",
		en: "Thwackey"
	},

	abilities: [{
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
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu’à 2 cartes Énergie Grass, puis les attacher à l’un de vos Pokémon. Mélangez ensuite votre deck.",
			en: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Grass y unirlas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia Grass e assegnarle a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por até 2 cartas de Energia Grass no seu baralho e ligá-las a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Grass-Energiekarten durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Enfoncement",
			en: "Hammer In",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 140,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card