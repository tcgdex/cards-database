import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
				es: "Rayo Confuso",
				it: "Stordiraggio",
				pt: "Raio da Confusão",
				de: "Konfustrahl"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Spark",
				fr: "Aqua-Étincelle",
				es: "Chispa Aqua",
				it: "Acquascintilla",
				pt: "Faísca de Água",
				de: "Aquafunke"
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, this attack does 60 more damage.",
				fr: "Si de l’Énergie Water est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Water unida a él, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Water assegnate, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon possuir alguma Energia Water ligada a ele, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

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

	retreat: 2,

	thirdParty: {
		cardmarket: 295361
	}
}

export default card
