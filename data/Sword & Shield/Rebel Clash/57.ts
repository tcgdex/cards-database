import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [101],
	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},

	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Orb Collector",
				fr: "Collectionneur d'Orbes",
				es: "Coleccionista de Orbes",
				it: "Collezionista di Sfere",
				pt: "Colecionador de Esferas",
				de: "Orbsammler"
			},
			effect: {
				en: "Search your deck for up to 3 Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Rolling Attack",
				fr: "Attaque Qui Roule",
				es: "Ataque Giro",
				it: "Attacco Rotolante",
				pt: "Golpe Rolador",
				de: "Rollender Angriff"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	hp: 90,
	types: ["Lightning"],
	regulationMark: "D",
	retreat: 0,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It stores an overflowing amount of electric energy inside its body. Even a small shock makes it explode."
	}
}

export default card
