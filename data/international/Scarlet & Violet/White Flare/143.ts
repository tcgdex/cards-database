import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'de-de': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'es-es': "Zoroark",
		'es-mx': "Zoroark"
	},

	illustrator: "Iwamoto05",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'de-de': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'es-es': "Zorua",
		'es-mx': "Zorua"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Mind Jack",
			'fr-fr': "Emprise Mentale",
			'de-de': "Gedankenstoß",
			'it-it': "Sollevamente",
			'pt-br': "Tomada Mental",
			'es-es': "Levantamente",
			'es-mx': "Embargo Mental"
		},

		effect: {
			'en-us': "This attack does 30 damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chacun des Pokémon de Banc de votre adversaire.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Pokémon no Banco do seu oponente.",
			'es-es': "Este ataque hace 30 puntos de daño por cada uno de los Pokémon en Banca de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada uno de los Pokémon en Banca de tu rival."
		},

		damage: "30×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Foul Play",
			'fr-fr': "Tricherie",
			'de-de': "Schmarotzer",
			'it-it': "Ripicca",
			'pt-br': "Jogo Sujo",
			'es-es': "Juego Sucio",
			'es-mx': "Juego Sucio"
		},

		effect: {
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			'es-es': "Elige uno de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			'es-mx': "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo como este ataque."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836171,
				tcgplayer: 642256
			}
		},
	],
}

export default card
