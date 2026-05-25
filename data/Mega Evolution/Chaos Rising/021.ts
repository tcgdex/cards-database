import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		'es-mx': "Frogadier",
		de: "Amphizel",
		it: "Frogadier",
		pt: "Frogadier"
	},

	illustrator: "Nelnal",
	rarity: "Common",
	category: "Pokemon",
	dexId: [657],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Froakie"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Summoning Jutsu",
			fr: "Jutsu Invocatoire",
			es: "Llamamiento Jutsu",
			'es-mx': "Jutsu de Invocación",
			de: "Beschwörendes Jutsu",
			it: "Jutsu Evocativa",
			pt: "Invoca-jitsu"
		},

		cost: ["Water"],

		effect: {
			en: "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon, muéstralos y ponlos en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 3 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 3 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague",
			es: "Filo Agua",
			'es-mx': "Filo Acuático",
			de: "Aquaschneide",
			it: "Acquataglio",
			pt: "Aqua Gume"
		},

		cost: ["Water", "Water"],
		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693490
	}
}

export default card