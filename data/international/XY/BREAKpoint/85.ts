import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Aromatisse",
		'fr-fr': "Cocotine",
		'es-es': "Aromatisse",
		'it-it': "Aromatisse",
		'pt-br': "Aromatisse",
		'de-de': "Parfinesse"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		683,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Spritzee",
		'fr-fr': "Fluvetin",
		'es-es': "Spritzee",
		'it-it': "Spritzee",
		'pt-br': "Spritzee",
		'de-de': "Parfi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dizzying Cologne",
				'fr-fr': "Arôme Enivrant",
				'es-es': "Colonia Mareante",
				'it-it': "Profumo Stordente",
				'pt-br': "Colônia Estonteante",
				'de-de': "Schwindelerregendes Parfüm"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 40 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 40 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, este ataque causará 40 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
				'es-es': "Viento Feérico",
				'it-it': "Vento di Fata",
				'pt-br': "Vento de Fada",
				'de-de': "Feenbrise"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its scent is so overpowering that, unless a Trainer happens to really enjoy the smell, he or she will have a hard time walking alongside it.",
	},

	thirdParty: {
		cardmarket: 288260,
		tcgplayer: 111620
	}
}

export default card
