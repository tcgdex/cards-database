import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Xerneas",
		fr: "Xerneas",
		de: "Xerneas",
		es: "Xerneas",
		it: "Xerneas",
		'es-mx': "Xerneas"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Geonavigation",
			fr: "Géonavigation",
			de: "Geonavigation",
			es: "Geonavegación",
			it: "Geonavigazione",
			'es-mx': "Geonavegación"
		},

		effect: {
			en: "Search your deck for up to 2 Stadium cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Stade, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Stadionkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas de Estadio, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Stadio, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Estadio, muéstralas y ponlas en tu mano. Después, baraja tu mazo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Aurora Horns",
			fr: "Cornes Boréales",
			de: "Aurorahörner",
			es: "Cuernos Aurora",
			it: "Corni dell'Aurora",
			'es-mx': "Cuernos Aurora"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card