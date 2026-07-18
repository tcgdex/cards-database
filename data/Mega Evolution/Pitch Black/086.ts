import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Armarouge",
		fr: "Carmadura",
		es: "Armarouge",
		'es-mx': "Armarouge",
		de: "Crimanzo",
		it: "Armarouge",
		pt: "Armarouge"
	},

	illustrator: "Iwamoto05",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [936],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Charcadet"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flame Legion",
			fr: "Légion de Flammes",
			es: "Legión de Llamas",
			'es-mx': "Legión de Fuego",
			de: "Flammenlegion",
			it: "Legione di Fiamme",
			pt: "Legião de Chamas"
		},

		cost: ["Fire"],

		damage: "40+",

		effect: {
			en: "This attack does 40 more damage for each of your Benched Pokémon that has any {R} Energy attached.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chacun de vos Pokémon de Banc auxquels au moins une Énergie {R} est attachée.",
			es: "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon en Banca que tengan alguna Energía {R} unida.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon en Banca que tengan alguna Energía {R} unida.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, an das mindestens 1 {R}-Energie angelegt ist, 40 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 40 danni in più per ciascuno dei Pokémon nella tua panchina che ha delle Energie {R} assegnate.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada um dos seus Pokémon no Banco que tem alguma Energia {R} ligada a ele."
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
				cardmarket: 895870,
				tcgplayer: 704843
			}
		},
	],
}

export default card
