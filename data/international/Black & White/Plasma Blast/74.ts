import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'es-es': "Porygon-Z",
		'it-it': "Porygon-Z",
		'pt-br': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Plasma Transfer",
				'fr-fr': "Transfert Plasma",
				'es-es': "Traspaso Plasma Transferencia Plasma",
				'it-it': "Plasmatransfer",
				'pt-br': "Transferência de Plasma",
				'de-de': "Plasma-Transfer"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a Plasma Energy attached to 1 of your Pokémon to another of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Plasma attachée à 1 de vos Pokémon vers un autre de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover una Energía Plasma unida a 1 de tus Pokémon a otro de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi spostare a piacimento le Energie Plasma assegnate ai tuoi Pokémon.",
				'pt-br': "Quantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover uma Energia de Plasma ligada a 1 dos seus Pokémon para outro Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Plasma-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tri Attack",
				'fr-fr': "Triplattaque",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its programming was modified to enable work in alien dimensions. It did not work as planned.",
	},

	thirdParty: {
		cardmarket: 281095,
		tcgplayer: 88319
	}
}

export default card
