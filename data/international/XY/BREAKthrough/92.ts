import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Zoroark BREAK",
		'fr-fr': "Zoroark TURBO",
		'es-es': "Zoroark TURBO",
		'it-it': "Zoroark TURBO",
		'pt-br': "Zoroark TURBO",
		'de-de': "Zoroark-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'es-es': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'de-de': "Zoroark"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Foul Play",
				'fr-fr': "Tricherie",
				'es-es': "Juego Sucio",
				'it-it': "Ripicca",
				'pt-br': "Jogo Sujo",
				'de-de': "Schmarotzer"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
				'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
				'it-it': "Scegli uno degli attacchi del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
				'de-de': "Wähle 1 Angriff des Aktiven Pokémon deines Gegners und verwende ihn als diesen Angriff."
			},

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 286338,
		tcgplayer: 107211
	}
}

export default card
