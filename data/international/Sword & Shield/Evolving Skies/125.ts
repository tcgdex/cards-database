import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Atsushi Furusawa",

	attacks: [{
		name: {
			'en-us': "Vee-Search",
			'fr-fr': "Vé-Chercher",
			'es-es': "Vee por V",
			'it-it': "Cerca V",
			'pt-br': "Vee-Search",
			'de-de': "V-Suche"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Pokémon V, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon-V, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon V, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon-V, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Search your deck for up to 3 Pokémon V, reveal them, and put them into your hand. Then, shuffle your deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon-V, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Stampede",
			'de-de': "Zertrampeln"
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
		'en-us': "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574179,
				tcgplayer: 246847
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574179,
				tcgplayer: 246847
			}
		},
	],
}

export default card
