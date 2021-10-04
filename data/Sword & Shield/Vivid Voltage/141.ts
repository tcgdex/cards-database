import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Togekiss VMAX",
		fr: "Togekiss VMAX",
		es: "Togekiss VMAX",
		it: "Togekiss VMAX",
		pt: "Togekiss VMAX",
		de: "Togekiss VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 310,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Togekiss V",
		fr: "Togekiss-V",
		es: "Togekiss V",
		it: "Togekiss-V",
		pt: "Togekiss V",
		de: "Togekiss-V"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Max Glide",
				fr: "Glissomax",
				es: "Maxiplaneo",
				it: "Dynaliante",
				pt: "Planeio Max",
				de: "Dyna-Gleiten"
			},
			effect: {
				en: "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Vous pouvez chercher dans votre deck jusqu’à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Puoi cercare nel tuo mazzo fino a due carte e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Você pode procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Du kannst dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	regulationMark: "D",
	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",
	suffix: "V"
}

export default card
