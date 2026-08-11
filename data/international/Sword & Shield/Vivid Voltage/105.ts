import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [302],

	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Filch",
				'fr-fr': "Maraudage",
				'es-es': "Birlar",
				'it-it': "Furtarello",
				'pt-br': "Furtar",
				'de-de': "Mopsen"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre 1 carta.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Torment",
				'fr-fr': "Tourmente",
				'es-es': "Tormento",
				'it-it': "Attaccalite",
				'pt-br': "Atormentar",
				'de-de': "Folterknecht"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
				'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
				'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
				'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "This Pokémon is feared. When its gemstone eyes begin to glow with a sinister shine, it's believed that Sableye will steal people's spirits away."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511945,
				tcgplayer: 226557
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511945,
				tcgplayer: 226557
			}
		},
	],
}

export default card
