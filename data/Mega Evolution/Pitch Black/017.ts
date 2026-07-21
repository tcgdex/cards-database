import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		'es-mx': "Relicanth",
		de: "Relicanth",
		it: "Relicanth",
		pt: "Relicanth"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [369],
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fossil Beatdown",
			fr: "Dérouillée Fossile",
			es: "Derribo Fósil",
			'es-mx': "Paliza Fósil",
			de: "Fossile Abreibung",
			it: "Fossilbatosta",
			pt: "Surra de Fóssil"
		},

		cost: ["Colorless"],

		damage: "10+",

		effect: {
			en: "This attack does 30 more damage for each of your Benched Pokémon that has \"Antique\" in its name.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant \" Ancien \" dans leur nom.",
			es: "Este ataque hace 30 puntos de daño más por cada uno de tus Pokémon en Banca que tengan \"Antiguo\" en su nombre.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada uno de tus Pokémon en Banca que tengan \"Antiguo\" en su nombre.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, bei dem \"Antikes\" oder \"Antiker\" zum Namen gehört, 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ciascuno dei Pokémon nella tua panchina che ha \"Vecchio\" o \"Vecchia\" nel nome.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada um dos seus Pokémon no Banco que tem \"Arcaico\" em seu nome."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895805,
				tcgplayer: 704774
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895805,
				tcgplayer: 704774
			}
		},
	],
}

export default card
