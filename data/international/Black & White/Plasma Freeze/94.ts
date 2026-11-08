import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Kecleon",
		'fr-fr': "Kecleon",
		'es-es': "Kecleon",
		'it-it': "Kecleon",
		'pt-br': "Kecleon",
		'de-de': "Kecleon"
	},

	illustrator: "Toyste Beach",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		352,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Color Change",
				'fr-fr': "Déguisement",
				'es-es': "Cambio Color",
				'it-it': "Cambiacolore",
				'pt-br': "Troca de Cor",
				'de-de': "Farbwechsel"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, this Pokémon is the same type as your opponent’s Active Pokémon.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, ce Pokémon est du même type que le Pokémon Actif de votre adversaire.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, este Pokémon es del mismo tipo que el Pokémon Activo de tu rival.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, avrà lo stesso tipo del Pokémon attivo del tuo avversario.",
				'pt-br': "Desde que este Pokémon seja seu Pokémon Ativo, esse Pokémon é do mesmo tipo do Pokémon Ativo do seu oponente.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, ist dieses Pokémon vom gleichen Typ wie das Aktive Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Imittack",
				'fr-fr': "Imit’Attaque",
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. If this Pokémon has the necessary Energy to use that attack, use it as this attack.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Si ce Pokémon a l'Énergie nécessaire pour utiliser l'attaque choisie, utilisez-la  à la place de cette attaque.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can freely change its body's color. The zigzag pattern on its belly doesn't change, however.",
	},

	thirdParty: {
		cardmarket: 280972,
		tcgplayer: 86432
	}
}

export default card
