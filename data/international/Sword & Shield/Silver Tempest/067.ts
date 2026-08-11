import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [280],
	set: Set,

	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Memory Skip",
			'fr-fr': "Saut de Mémoire",
			'es-es': "Salto de Memoria",
			'it-it': "Salto Mnemonico",
			'pt-br': "Lapso de Memória",
			'de-de': "Gedächtnislücke"
		},

		effect: {
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
			'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It is highly attuned to the emotions of people and Pokémon. It hides if it senses hostility.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682114,
				tcgplayer: 451721
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682114,
				tcgplayer: 451721
			}
		},
	],
}

export default card
