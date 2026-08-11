import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Gigalith",
		'fr-fr': "Gigalithe",
		'es-es': "Gigalith",
		'it-it': "Gigalith",
		'pt-br': "Gigalith",
		'de-de': "Brockoloss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",
	illustrator: "Masakazu Fukuda",

	attacks: [{
		name: {
			'en-us': "Guard Press",
			'fr-fr': "Pression de Garde",
			'es-es': "Presión de Guardia",
			'it-it': "Pressadifesa",
			'pt-br': "Guard Press",
			'de-de': "Schutzdruck"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 50,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Pressure Shot",
			'fr-fr': "Tir Sous Pression",
			'es-es': "Disparo a Presión",
			'it-it': "Colpo Pressione",
			'pt-br': "Pressure Shot",
			'de-de': "Druckgeschoss"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself for each damage counter on it.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts pour chaque marqueur de dégâts placé sur lui.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo por cada contador de daño que tenga sobre él.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso per ogni segnalino danno presente su di esso.",
			'pt-br': "This Pokémon also does 10 damage to itself for each damage counter on it.",
			'de-de': "Dieses Pokémon fügt für jede auf ihm liegende Schadensmarke auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
		'es-es': "Boldore",
		'it-it': "Boldore",
		'pt-br': "Boldore",
		'de-de': "Sedimantur"
	},

	description: {
		'en-us': "Although its energy blasts can blow away a dump truck, they have a limitation— they can only be fired when the sun is out."
	},

	dexId: [526],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574136,
				tcgplayer: 246887
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574136,
				tcgplayer: 246887
			}
		},
	],
}

export default card
