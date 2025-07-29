import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magnéti",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Searching Magnet",
				fr: "Aimant Inquisiteur",
				es: "Imán Buscador",
				it: "Sonda Magnetica",
				pt: "Ímã Buscador",
				de: "Suchmagnet"
			},
			effect: {
				en: "Search your deck for up to 3 Lightning Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes Énergie Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Lightning, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia Lightning, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia Lightning no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Lightning-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
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

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 355553
	}
}

export default card
