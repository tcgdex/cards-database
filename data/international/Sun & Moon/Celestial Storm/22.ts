import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Dhelmise",
		'fr-fr': "Sinistrail",
		'es-es': "Dhelmise",
		'it-it': "Dhelmise",
		'pt-br': "Dhelmise",
		'de-de': "Moruda"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		781,
	],

	hp: 130,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Giga Drain",
				'fr-fr': "Giga-Sangsue",
				'es-es': "Gigadrenado",
				'it-it': "Gigassorbimento",
				'pt-br': "Gigadreno",
				'de-de': "Gigasauger"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas hecho al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Spin",
				'fr-fr': "Pirouette Puissante",
				'es-es': "Supergiro",
				'it-it': "Supergiro",
				'pt-br': "Pirueta Potente",
				'de-de': "Mächtiger Wirbler"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The soul of seaweed adrift in the waves became reborn as this Pokémon. It maintains itself with new infusions of seabed detritus and seaweed.",
	},

	thirdParty: {
		cardmarket: 361269,
		tcgplayer: 170832
	}
}

export default card
