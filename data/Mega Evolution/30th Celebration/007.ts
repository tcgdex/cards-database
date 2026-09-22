import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "After absorbing plenty of sunlight, Cherrim takes this form. It's full of energy while it's like this, and its liveliness will go on until sundown."
	},

	name: {
		en: "Cherrim",
		fr: "Ceriflor",
		de: "Kinoso",
		es: "Cherrim",
		it: "Cherrim",
		'es-mx': "Cherrim"
	},

	illustrator: "takashi shiraishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [421],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Energy Gift",
			fr: "Don d'Énergie",
			de: "Energiegabe",
			es: "Regalo de Energía",
			it: "Donergia",
			'es-mx': "Regalo de Energía"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia il tuo mazzo.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Básica y únelas a tus Pokémon de la manera que quieras. Después, baraja tu mazo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Leafage",
			fr: "Feuillage",
			de: "Blattwerk",
			es: "Follaje",
			it: "Fogliame",
			'es-mx': "Follaje"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907613,
				tcgplayer: 716441
			}
		}
	],
}

export default card
