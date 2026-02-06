import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [36],

	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		es: "Clefable",
		'es-mx': "Clefable",
		de: "Pixi",
		it: "Clefable",
		pt: "Clefable"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Metronome",
			fr: "Métronome",
			es: "Metrónomo",
			'es-mx': "Metrónomo",
			de: "Metronom",
			it: "Metronomo",
			pt: "Metrônomo"
		},

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			es: "Elige uno de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			'es-mx': "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo como este ataque.",
			de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
			it: "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			'es-mx': "Disparo Mágico",
			de: "Magischer Schuss",
			it: "Magicolpo",
			pt: "Tiro Mágico"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675887,
		cardmarket: 869686
	}
}

export default card