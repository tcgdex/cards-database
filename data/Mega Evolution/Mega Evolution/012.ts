import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Celebi",
		fr: "Celebi",
		de: "Celebi",
		it: "Celebi",
		es: "Celebi",
		pt: "Celebi",
		'es-mx': "Celebi"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [251],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Traverse Time",
			fr: "À Travers le Temps",
			de: "Reise durch die Zeit",
			it: "Traversata Temporale",
			es: "Viaje Transtemporal",
			pt: "Travessia Temporal",
			'es-mx': "Travesía Temporal"
		},

		effect: {
			en: "Search your deck for up to 3 in any combination of {G} Pokémon and Stadium cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une combinaison d'un maximum de 3 Pokémon {G} et/ou cartes Stade, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach einer beliebigen Kombination aus bis zu 3 {G}-Pokémon und Stadionkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre fra Pokémon {G} e carte Stadio in qualsiasi combinazione, mostrali e aggiungili alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja, en cualquier combinación, hasta 3 cartas de Pokémon {G} y de Estadio, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 3 cartas de Pokémon {G} e de Estádio no seu baralho em qualquer combinação, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo, en cualquier combinación, hasta 3 cartas de Pokémon {G} y de Estadio, muéstralas y ponlas en tu mano. Después, baraja tu mazo."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Solar Cutter",
			fr: "Coupe Solaire",
			de: "Solarschneider",
			it: "Taglio Solare",
			es: "Corte Solar",
			pt: "Cortador Solar",
			'es-mx': "Corte Solar"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654351,
		cardmarket: 851083
	}
}

export default card