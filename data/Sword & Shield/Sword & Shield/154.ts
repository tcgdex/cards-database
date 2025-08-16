import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Dubwool",
		fr: "Moumouflon",
		es: "Dubwool",
		it: "Dubwool",
		pt: "Dubwool",
		de: "Zwollock"
	},

	illustrator: "You Iribi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Wooloo",
		fr: "Moumouton",
		es: "Wooloo",
		it: "Wooloo",
		pt: "Wooloo",
		de: "Wolly"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cotton Guard",
				fr: "Cotogarde",
				es: "Rizo Algodón",
				it: "Cotonscudo",
				pt: "Proteção de Algodão",
				de: "Watteschild"
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
				es: "Doble Filo",
				it: "Sdoppiatore",
				pt: "Faca de Dois Gumes",
				de: "Risikotackle"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Its majestic horns are meant only to impress the opposite gender. They never see use in battle."
	},

	dexId: [832],

	thirdParty: {
		cardmarket: 436864,
		tcgplayer: 208476
	}
}

export default card
