import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [559],
	set: Set,

	name: {
		'en-us': "Marnie's Scraggy",
		'fr-fr': "Baggiguane de Rosemary",
		'de-de': "Marys Zurrokex",
		'it-it': "Scraggy di Mary",
		'es-es': "Scraggy de Roxy",
		'pt-br': "Scraggy da Marine",
		'es-mx': "Scraggy de Marnie"
	},


	illustrator: "Teeziro",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Crunch",
			'fr-fr': "Mâchouille",
			'de-de': "Knirscher",
			'it-it': "Sgranocchio",
			'es-es': "Triturar",
			'pt-br': "Mastigada",
			'es-mx': "Triturar"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826006,
				tcgplayer: 632940
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826006,
				tcgplayer: 632940
			}
		},
	],
}

export default card
