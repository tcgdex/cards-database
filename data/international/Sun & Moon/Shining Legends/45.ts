import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Marshadow",
		'fr-fr': "Marshadow",
		'es-es': "Marshadow",
		'it-it': "Marshadow",
		'pt-br': "Marshadow",
		'de-de': "Marshadow"
	},

	illustrator: "Emi Ando",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		802,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Let Loose",
				'fr-fr': "Libérer",
				'es-es': "Dejar Suelto",
				'it-it': "Liberare",
				'pt-br': "Extravasar",
				'de-de': "Loslassen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may have each player shuffle their hand into their deck and draw 4 cards.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez demander à tous les joueurs de mélanger leur main avec leur deck et de piocher 4 cartes.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes hacer que cada jugador ponga las cartas de su mano en su baraja, las baraje todas y robe 4 cartas.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi far rimischiare a ciascun giocatore le carte che ha in mano nel suo mazzo e pescare quattro carte.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode fazer com que cada jogador embaralhe a própria mão no próprio baralho e compre 4 cartas.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du beide Spieler veranlassen, ihre Handkarten in ihr Deck zu mischen und 4 Karten zu ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Punch",
				'fr-fr': "Poing Ombre",
				'es-es': "Puño Sombra",
				'it-it': "Pugnodombra",
				'pt-br': "Soco Sombrio",
				'de-de': "Finsterfaust"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 30,

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

	description: {
		'en-us': "Able to conceal itself in shadows, it never appears before humans, so its very existence was the stuff of myth.",
	},

	thirdParty: {
		cardmarket: 302183,
		tcgplayer: 146702
	}
}

export default card
