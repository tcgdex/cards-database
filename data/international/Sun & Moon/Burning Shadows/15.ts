import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Araquanid",
		'fr-fr': "Tarenbulle",
		'es-es': "Araquanid",
		'it-it': "Araquanid",
		'pt-br': "Araquanid",
		'de-de': "Aranestro"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		752,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Net",
				'fr-fr': "Filet de Bulles",
				'es-es': "Red Pompa",
				'it-it': "Retebolla",
				'pt-br': "Rede de Bolha",
				'de-de': "Wasserblasennetz"
			},
			effect: {
				'en-us': "Energy can’t be attached to the Defending Pokémon from your opponent’s hand during their next turn.",
				'fr-fr': "Aucune Énergie ne peut être attachée au Pokémon Défenseur de la main de votre adversaire pendant son prochain tour.",
				'es-es': "No se puede unir Energía al Pokémon Defensor de la mano de tu rival durante su próximo turno.",
				'it-it': "Nessuna Energia può essere assegnata al Pokémon difensore dalla mano del tuo avversario durante il suo prossimo turno.",
				'pt-br': "Energias não poderão ser ligadas ao Pokémon Defensor da mão do seu oponente durante a próxima vez dele(a) jogar.",
				'de-de': "Energie aus der Hand deines Gegners kann während seines nächsten Zuges nicht an das Verteidigende Pokémon angelegt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc Aiguisé",
				'es-es': "Colmillo Afilado",
				'it-it': "Zannaffilata",
				'pt-br': "Presa Afiada",
				'de-de': "Scharfe Fänge"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It delivers headbutts with the water bubble on its head. Small Pokémon get sucked into the bubble, where they drown.",
	},

	thirdParty: {
		cardmarket: 299422,
		tcgplayer: 138285
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
