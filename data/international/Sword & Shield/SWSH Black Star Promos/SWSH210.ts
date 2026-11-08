import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		'fr-fr': "Plumeline",
		'de-de': "Choreogel",
		'es-es': "Oricorio",
		'pt-br': "Oricorio",
		'it-it': "Oricorio",
		'en-us': "Oricorio"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Appel Partagé",
			'de-de': "Gemischter Ruf",
			'es-es': "Llamada Mixta",
			'pt-br': "Chamada Mista",
			'it-it': "Cercassortito",
			'en-us': "Mixed Call"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck un Pokémon et une carte Supporter, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon und 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta de Pokémon y 1 carta de Partidario, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 Pokémon e 1 carta de Apoiador no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo un Pokémon e una carta Aiuto, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Search your deck for a Pokémon and a Supporter card, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Aile Tranchante",
			'de-de': "Rasierflügel",
			'es-es': "Ala Cortante",
			'pt-br': "Asa Cortante",
			'it-it': "Ala Tagliente",
			'en-us': "Razor Wing"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "This Oricorio has sipped purple nectar. Some dancers use its graceful, elegant dancing as inspiration."
	},

	thirdParty: {
		cardmarket: 580165
	}
}

export default card
