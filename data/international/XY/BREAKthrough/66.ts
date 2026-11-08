import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'es-es': "Mismagius",
		'it-it': "Mismagius",
		'pt-br': "Mismagius",
		'de-de': "Traunmagil"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		429,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'es-es': "Misdreavus",
		'it-it': "Misdreavus",
		'pt-br': "Misdreavus",
		'de-de': "Traunfugil"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Twisted Incantation",
				'fr-fr': "Incantation Maléfique",
				'es-es': "Encantamiento Maldito",
				'it-it': "Incanto Malefico",
				'pt-br': "Encantamento Retorcido",
				'de-de': "Böse Beschwörung"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle his or her hand into his or her deck and draw a card for each of his or her remaining Prize cards.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez demander à votre adversaire de mélanger sa main dans son deck et de piocher une carte pour chacune des cartes Récompense qu'il lui reste.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes hacer que tu rival ponga las cartas de su mano en su baraja y las baraje todas, y robe 1 carta por cada una de las cartas de Premio que le queden.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi far rimischiare al tuo avversario le carte che ha in mano nel suo mazzo e fargli pescare una carta per ogni carta Premio che gli resta.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode fazer com que o seu oponente embaralhe sua mão em seu baralho e compre um card para cada um dos cards de Prêmio restantes do seu oponente.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du deinen Gegner dazu veranlassen, seine Handkarten in sein Deck zu mischen und 1 Karte für jede seiner noch übrigen Preiskarten zu ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Curse Deeply",
				'fr-fr': "Malédiction Intense",
				'es-es': "Profunda Maldición",
				'it-it': "Sortilegio",
				'pt-br': "Maldição Profunda",
				'de-de': "Nachhaltiger Fluch"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 60,

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
		'en-us': "Its cries sound like incantations to torment the foe. It appears where you least expect it.",
	},

	thirdParty: {
		cardmarket: 286312,
		tcgplayer: 107185
	}
}

export default card
