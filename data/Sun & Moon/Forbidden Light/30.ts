import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Avalugg",
		fr: "Séracrawl",
		es: "Avalugg",
		it: "Avalugg",
		pt: "Avalugg",
		de: "Arktilas"
	},
	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		713,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frozen Ground",
				fr: "Terrain Gelé",
				es: "Suelo Congelado",
				it: "Terra Congelata",
				pt: "Solo Congelado",
				de: "Gefrorener Boden"
			},
			effect: {
				en: "Your opponent can’t play any Stadium cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Stade de sa main pendant son prochain tour.",
				es: "Tu rival no puede jugar ninguna carta de Estadio de su mano durante su próximo turno.",
				it: "Il tuo avversario non può giocare le carte Stadio che ha in mano durante il suo prossimo turno.",
				pt: "Seu oponente não poderá jogar nenhuma carta de Estádio da própria mão durante a próxima vez dele(a) jogar.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Stadionkarten aus seiner Hand spielen."
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
				fr: "Coud’Krâne",
				es: "Cabezazo",
				it: "Capocciata",
				pt: "Quebra-crânio",
				de: "Schädelwumme"
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
