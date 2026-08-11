import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Armarouge",
		'fr-fr': "Carmadura",
		'es-es': "Armarouge",
		'es-mx': "Armarouge",
		'de-de': "Crimanzo",
		'it-it': "Armarouge",
		'pt-br': "Armarouge"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [936],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Charcadet"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Flame Legion",
			'fr-fr': "Légion de Flammes",
			'es-es': "Legión de Llamas",
			'es-mx': "Legión de Fuego",
			'de-de': "Flammenlegion",
			'it-it': "Legione di Fiamme",
			'pt-br': "Legião de Chamas"
		},

		cost: ["Fire"],

		damage: "40+",

		effect: {
			'en-us': "This attack does 40 more damage for each of your Benched Pokémon that has any {R} Energy attached.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chacun de vos Pokémon de Banc auxquels au moins une Énergie {R} est attachée.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon en Banca que tengan alguna Energía {R} unida.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon en Banca que tengan alguna Energía {R} unida.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank, an das mindestens 1 {R}-Energie angelegt ist, 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ciascuno dei Pokémon nella tua panchina che ha delle Energie {R} assegnate.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada um dos seus Pokémon no Banco que tem alguma Energia {R} ligada a ele."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895800,
				tcgplayer: 704769
			}
		},
	],
}

export default card
