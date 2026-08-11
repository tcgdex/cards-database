import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [862],

	name: {
		'en-us': "Galarian Obstagoon",
		'fr-fr': "Ixon de Galar",
		'es-es': "Obstagoon de Galar",
		'it-it': "Obstagoon di Galar",
		'pt-br': "Obstagoon de Galar",
		'de-de': "Galar-Barrikadax"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Galarian Linoone",
		'fr-fr': "Linéon de Galar"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wicked Ruler",
				'fr-fr': "Leader Dément",
				'es-es': "Jefe Malvado",
				'it-it': "Leader Scellerato",
				'pt-br': "Chefão Perverso",
				'de-de': "Fetziger Herrscher"
			},
			effect: {
				'en-us': "Once during your turn, you may have your opponent discard cards from their hand until they have 4 cards in their hand.",
				'fr-fr': "Une fois pendant votre tour, vous pouvez demander à votre adversaire de défausser des cartes de sa main jusqu'à en avoir 4 en main.",
				'es-es': "Una vez durante tu turno, puedes hacer que tu rival descarte cartas de su mano hasta que tenga 4 cartas en su mano.",
				'it-it': "Una sola volta durante il tuo turno, puoi far scartare al tuo avversario delle carte che ha in mano fino a lasciarlo con quattro carte in mano.",
				'pt-br': "Uma vez durante o seu turno, você poderá fazer com que o seu oponente descarte cartas da própria mão até que ele(a) tenha 4 cartas na própria mão.",
				'de-de': "Einmal während deines Zuges kannst du deinen Gegner dazu veranlassen, so lange Karten von seiner Hand auf seinen Ablagestapel zu legen, bis er 4 Karten auf seiner Hand hat."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Impact",
				'fr-fr': "Coup d'Articulations",
				'es-es': "Impacto Nudillo",
				'it-it': "Impatto Nocche",
				'pt-br': "Impacto Ossudo",
				'de-de': "Knöchelprall"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't attack.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		'en-us': "Its voice is staggering in volume. Obstagoon has a tendency to take on a threatening posture and shout—this move is known as Obstruct."
	},

	thirdParty: {
		cardmarket: 500040,
		tcgplayer: 223037
	}
}

export default card
