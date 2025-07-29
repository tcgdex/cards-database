import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Klefki",
		fr: "Trousselin",
		es: "Klefki",
		it: "Klefki",
		pt: "Klefki",
		de: "Clavion"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		707,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Key of Secrets",
				fr: "Clé des Secrets",
				es: "Llave de Secretos",
				it: "Chiave dei Segreti",
				pt: "Chave de Segredos",
				de: "Schlüssel der Geheimnisse"
			},
			effect: {
				en: "Each of your Metal Pokémon’s Resistance is now -40.",
				fr: "La Résistance de chacun de vos Pokémon Metal est maintenant -40.",
				es: "La Resistencia de cada uno de tus Pokémon Metal pasa a ser -40.",
				it: "La resistenza di ciascuno dei tuoi Pokémon Metal è -40.",
				pt: "A Resistência de cada um dos seus Pokémon Metal agora é - 40.",
				de: "Die Resistenz jedes deiner Metal-Pokémon ist jetzt -40."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 369039
	}
}

export default card
