import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Kabutops",
		'fr-fr': "Kabutops",
		'es-es': "Kabutops",
		'it-it': "Kabutops",
		'pt-br': "Kabutops",
		'de-de': "Kabutops"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto",
		'es-es': "Kabuto",
		'it-it': "Kabuto",
		'pt-br': "Kabuto",
		'de-de': "Kabuto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cling",
				'fr-fr': "Corps à Corps",
				'es-es': "Agarrarse",
				'it-it': "Aggrappare",
				'pt-br': "Agarrar",
				'de-de': "Klammern"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure deste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "X-Scissor",
				'fr-fr': "Plaie-Croix",
				'es-es': "Tijera X",
				'it-it': "Forbice X",
				'pt-br': "Tesoura X",
				'de-de': "Kreuzschere"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A slim and fast swimmer. It slices its prey with its sharp sickles and drinks the body fluids.",
	},

	thirdParty: {
		cardmarket: 289865,
		tcgplayer: 117799
	}
}

export default card
