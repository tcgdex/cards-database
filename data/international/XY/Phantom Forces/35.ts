import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "M Gengar EX",
		'fr-fr': "M-Ectoplasma EX",
		'es-es': "M-Gengar EX",
		'it-it': "M Gengar EX",
		'pt-br': "M-Gengar EX",
		'de-de': "M-Gengar EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 220,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gengar-EX",
		'fr-fr': "Ectoplasma-EX",
		'es-es': "Gengar-EX",
		'it-it': "Gengar-EX",
		'pt-br': "Gengar-EX",
		'de-de': "Gengar-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Phantom Gate",
				'fr-fr': "Miroir Miroir",
				'es-es': "Puerta Espectral",
				'it-it': "Portale Fantasma",
				'pt-br': "Portão Fantasma",
				'de-de': "Phantomtor"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon's attacks and use it as this attack.",
				'fr-fr': "Choisissez l'une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque.",
				'es-es': "Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque.",
				'it-it': "Scegli uno degli attacchi dei Pokémon del tuo avversario e usalo al posto di questo attacco.",
				'pt-br': "Escolha 1 dos ataques dos Pokémon do seu oponente e use-o como este ataque.",
				'de-de': "Wähle 1 Angriff eines gegnerischen Pokémon und verwende ihn als diesen Angriff."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 94168
	}
}

export default card
