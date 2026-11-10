import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Magmar",
		fr: "Magmar",
		de: "Magmar",
		es: "Magmar",
		it: "Magmar",
		pt: "Magmar",
		'es-mx': "Magmar"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gather Strength",
			fr: "Pouvoir Collecté",
			de: "Kraftsammler",
			es: "Reunir Fuerzas",
			it: "Radunaforze",
			pt: "Reunir Força",
			'es-mx': "Reunir Fuerzas"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Básica, muéstralas y ponlas en tu mano. Después, baraja tu mazo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Combustion",
			fr: "Fournaise",
			de: "Glühen",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			'es-mx': "Combustión"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 727574,
		cardmarket: 918834
	}
}

export default card