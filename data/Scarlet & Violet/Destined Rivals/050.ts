import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		en: "Misty's Lapras",
		fr: "Lokhlass d'Ondine",
		de: "Mistys Lapras",
		it: "Lapras di Misty",
		es: "Lapras de Misty",
		pt: "Lapras da Misty",
		'es-mx': "Lapras de Misty"
	},

	illustrator: "En Morikura",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Swim Together",
			fr: "Nageons Ensemble",
			de: "Gemeinsames Schwimmen",
			it: "Nuotata in Compagnia",
			es: "Nadar Juntos",
			pt: "Nadar Juntos",
			'es-mx': "Nado en Compañía"
		},

		effect: {
			en: "Search your deck for up to 3 Misty's Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon d'Ondine, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 3 Mistys Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon di Misty, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja hasta 3 Pokémon de Misty, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 3 Pokémon da Misty no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon de Misty, muéstralos y ponlos en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Surf",
			fr: "Surf",
			de: "Surfer",
			it: "Surf",
			es: "Surf",
			pt: "Surfar",
			'es-mx': "Surf"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825924
	}
}

export default card
