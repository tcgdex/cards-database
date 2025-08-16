import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		fr: "Plumeline",
		de: "Choreogel",
		es: "Oricorio",
		pt: "Oricorio",
		it: "Oricorio",
		en: "Oricorio"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Appel Partagé",
			de: "Gemischter Ruf",
			es: "Llamada Mixta",
			pt: "Chamada Mista",
			it: "Cercassortito",
			en: "Mixed Call"
		},

		effect: {
			fr: "Cherchez dans votre deck un Pokémon et une carte Supporter, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Pokémon und 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Pokémon y 1 carta de Partidario, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 Pokémon e 1 carta de Apoiador no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo un Pokémon e una carta Aiuto, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			en: "Search your deck for a Pokémon and a Supporter card, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Aile Tranchante",
			de: "Rasierflügel",
			es: "Ala Cortante",
			pt: "Asa Cortante",
			it: "Ala Tagliente",
			en: "Razor Wing"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "This Oricorio has sipped purple nectar. Some dancers use its graceful, elegant dancing as inspiration."
	}
}

export default card