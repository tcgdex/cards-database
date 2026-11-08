import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'es-es': "Lanturn",
		'it-it': "Lanturn",
		'pt-br': "Lanturn",
		'de-de': "Lanturn"
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
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde Folie",
				'es-es': "Rayo Confuso",
				'it-it': "Stordiraggio",
				'pt-br': "Raio da Confusão",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Spark",
				'fr-fr': "Aqua-Étincelle",
				'es-es': "Chispa Aqua",
				'it-it': "Acquascintilla",
				'pt-br': "Faísca de Água",
				'de-de': "Aquafunke"
			},
			effect: {
				'en-us': "If this Pokémon has any Water Energy attached to it, this attack does 60 more damage.",
				'fr-fr': "Si de l’Énergie Water est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Water unida a él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Water assegnate, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon possuir alguma Energia Water ligada a ele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "This Pokémon flashes a bright light that blinds its prey. This creates an opening for it to deliver an electrical attack.",
	},

	thirdParty: {
		cardmarket: 295361,
		tcgplayer: 126921
	}
}

export default card
