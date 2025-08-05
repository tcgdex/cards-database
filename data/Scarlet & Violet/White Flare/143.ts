import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Zoroark",
		fr: "Zoroark",
		de: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		es: "Zoroark",
		'es-mx': "Zoroark"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Mind Jack",
			fr: "Emprise Mentale",
			de: "Gedankenstoß",
			it: "Sollevamente",
			pt: "Tomada Mental",
			es: "Levantamente",
			'es-mx': "Embargo Mental"
		},

		effect: {
			en: "This attack does 30 damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chacun des Pokémon de Banc de votre adversaire.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni Pokémon nella panchina del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano para cada Pokémon no Banco do seu oponente.",
			es: "Este ataque hace 30 puntos de daño por cada uno de los Pokémon en Banca de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada uno de los Pokémon en Banca de tu rival."
		},

		damage: "30×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Foul Play",
			fr: "Tricherie",
			de: "Schmarotzer",
			it: "Ripicca",
			pt: "Jogo Sujo",
			es: "Juego Sucio",
			'es-mx': "Juego Sucio"
		},

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
			it: "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			es: "Elige uno de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			'es-mx': "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo como este ataque."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836016
	}
}

export default card