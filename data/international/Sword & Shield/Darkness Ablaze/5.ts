import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [455],

	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'es-es': "Carnivine",
		'it-it': "Carnivine",
		'pt-br': "Carnivine",
		'de-de': "Venuflibis"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Return",
				'fr-fr': "Retour",
				'es-es': "Retribución",
				'it-it': "Ritorno",
				'pt-br': "Retorno",
				'de-de': "Rückkehr"
			},
			effect: {
				'en-us': "You may draw cards until you have 5 cards in your hand.",
				'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
				'es-es': "Puedes robar cartas hasta que tengas 5 cartas en tu mano.",
				'it-it': "Puoi pescare fino ad avere cinque carte in mano.",
				'pt-br': "Você pode comprar cartas até ter 5 cartas na sua mão.",
				'de-de': "Du kannst so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast."
			},
			damage: 20,

		},
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
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482899,
				tcgplayer: 219069
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482899,
				tcgplayer: 219069
			}
		},
	],
}

export default card
