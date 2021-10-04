import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Atsushi Furusawa",

	attacks: [{
		name: {
			en: "Vee-Search",
			fr: "Vé-Chercher",
			es: "Vee por V",
			it: "Cerca V",
			pt: "Vee-Search",
			de: "V-Suche"
		},

		effect: {
			en: "Search your deck for up to 3 Pokémon V, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon-V, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 Pokémon V, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon-V, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Search your deck for up to 3 Pokémon V, reveal them, and put them into your hand. Then, shuffle your deck.",
			de: "Durchsuche dein Deck nach bis zu 3 Pokémon-V, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Stampede",
			de: "Zertrampeln"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	dexId: [133],

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	}
}

export default card