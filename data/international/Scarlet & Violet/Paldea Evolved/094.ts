import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [765],
	set: Set,

	name: {
		'fr-fr': "Gouroutan",
		'en-us': "Oranguru",
		'es-es': "Oranguru",
		'it-it': "Oranguru",
		'pt-br': "Oranguru",
		'de-de': "Kommandutan"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Ordre du Conspirateur",
			'en-us': "Plotter's Command",
			'es-es': "Mandato del Conspirador",
			'it-it': "Ordine del Cospiratore",
			'pt-br': "Comando do Conspirador",
			'de-de': "Befehl des Strategen"
		},

		effect: {
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
			'es-es': "Elige uno de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Super Psy",
			'en-us': "Super Psy Bolt",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
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
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715569,
				tcgplayer: 497509,
				cardtrader: 248723
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715569,
				tcgplayer: 497509,
				cardtrader: 248723
			}
		},
	],

	illustrator: "Toshinao Aoki",

	description: {
		'en-us': "People used to mistake Oranguru for a human when they saw it issue command after command to the other Pokémon of the forest.",
	},
}

export default card
