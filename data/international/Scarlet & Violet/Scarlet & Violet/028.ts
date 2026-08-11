import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [951],
	set: Set,

	name: {
		'en-us': "Capsakid",
		'fr-fr': "Pimito",
		'es-es': "Capsakid",
		'it-it': "Capsakid",
		'pt-br': "Capsakid",
		'de-de': "Chilingel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Increasing Spice",
			'fr-fr': "Piment Progressif",
			'es-es': "Picantón",
			'it-it': "Più Piccante",
			'pt-br': "Mais Apimentado",
			'de-de': "Nachwürzen"
		},

		effect: {
			'en-us': "Search your deck for a Basic {R} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {R} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {R} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {R} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia {R} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Playful Kick",
			'fr-fr': "Coup de Pied de Garnement",
			'es-es': "Patada Juguetona",
			'it-it': "Calcio Briccone",
			'pt-br': "Chute Brincalhão",
			'de-de': "Verspielter Kick"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "GIDORA",

	description: {
		'en-us': "Traditional Paldean dishes can be extremely spicy because they include the shed front teeth of Capsakid among their ingredients.",
	},

	thirdParty: {
        cardmarket: 702324,
        tcgplayer: 487867
    }
}

export default card