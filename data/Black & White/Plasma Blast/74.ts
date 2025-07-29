import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		es: "Porygon-Z",
		it: "Porygon-Z",
		pt: "Porygon-Z",
		de: "Porygon-Z"
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
		en: "Porygon2",
		fr: "Porygon2",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Plasma Transfer",
				fr: "Transfert Plasma",
				es: "Traspaso Plasma Transferencia Plasma",
				it: "Plasmatransfer",
				pt: "Transferência de Plasma",
				de: "Plasma-Transfer"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Plasma Energy attached to 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Plasma attachée à 1 de vos Pokémon vers un autre de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover una Energía Plasma unida a 1 de tus Pokémon a otro de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare a piacimento le Energie Plasma assegnate ai tuoi Pokémon.",
				pt: "Quantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover uma Energia de Plasma ligada a 1 dos seus Pokémon para outro Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Plasma-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
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
				en: "Tri Attack",
				fr: "Triplattaque",
			},
			effect: {
				en: "Flip 3 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
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

	thirdParty: {
		cardmarket: 281095
	}
}

export default card
