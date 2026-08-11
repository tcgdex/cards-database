import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Mimikyu",
		'fr-fr': "Mimiqui",
		'es-es': "Mimikyu",
		'it-it': "Mimikyu",
		'pt-br': "Mimikyu",
		'de-de': "Mimigma"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		778,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

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
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Copycat",
				'fr-fr': "Photocopie",
				'es-es': "Copión",
				'it-it': "Copione",
				'pt-br': "Imitador",
				'de-de': "Imitator"
			},
			effect: {
				'en-us': "If your opponent’s Pokémon used an attack that isn’t a GX attack during their last turn, use it as this attack.",
				'fr-fr': "Si le Pokémon de votre adversaire a utilisé une attaque autre qu’une attaque GX pendant son dernier tour, utilisez-la en tant que cette attaque.",
				'es-es': "Si alguno de los Pokémon de tu rival usó un ataque que no es un ataque GX durante su último turno, úsalo para este ataque.",
				'it-it': "Se uno dei Pokémon del tuo avversario ha usato un attacco che non è un attacco GX durante il suo ultimo turno, usalo al posto di questo attacco.",
				'pt-br': "Se o Pokémon do seu oponente usou um ataque que não era um ataque GX durante a última vez dele(a) jogar, use-o como este ataque.",
				'de-de': "Wenn das Pokémon deines Gegners während seines letzten Zuges eine Attacke eingesetzt hat, die keine GX-Attacke ist, setze sie als diese Attacke ein."
			},

		},
	],

	retreat: 1,

	description: {
		'en-us': "Its actual appearance is unknown. A scholar who saw what was under its rag was overwhelmed by horror and died of the shock.",
	},

	thirdParty: {
		cardmarket: 297520,
		tcgplayer: 130966
	}
}

export default card
