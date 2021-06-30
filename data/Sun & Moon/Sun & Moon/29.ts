import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		it: "Golduck",
		pt: "Golduck",
		de: "Entoron"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Double Jet",
				fr: "Jets Doubles",
				es: "Doble Turbo",
				it: "Getto Doppio",
				pt: "Jato Duplo",
				de: "Doppeldüse"
			},
			effect: {
				en: "Discard up to 2 Water Energy cards from your hand. This attack does 60 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu’à 2 cartes Énergie Water de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta hasta 2 cartas de Energía Water de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta fino a due Energie Water dalla tua mano. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte até 2 cartas de Energia Water da sua mão. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
				de: "Lege bis zu 2 Water-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
