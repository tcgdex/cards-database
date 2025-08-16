import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		72,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sludge Shock",
				fr: "Choc Détritus",
				es: "Impacto de Residuos",
				it: "Fangoshock",
				pt: "Choque de Lama",
				de: "Schlammschock"
			},
			effect: {
				en: "The Defending Pokémon can’t be healed during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas être soigné pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede ser curado durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può essere curato.",
				pt: "O Pokémon Defensor não poderá ser curado durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann während des nächsten Zuges deines Gegners nicht geheilt werden."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 297486,
		tcgplayer: 130923
	}
}

export default card
