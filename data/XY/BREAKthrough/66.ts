import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Mismagius",
		fr: "Magirêve",
		es: "Mismagius",
		it: "Mismagius",
		pt: "Mismagius",
		de: "Traunmagil"
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
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		it: "Misdreavus",
		pt: "Misdreavus",
		de: "Traunfugil"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Twisted Incantation",
				fr: "Incantation Maléfique",
				es: "Encantamiento Maldito",
				it: "Incanto Malefico",
				pt: "Encantamento Retorcido",
				de: "Böse Beschwörung"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle his or her hand into his or her deck and draw a card for each of his or her remaining Prize cards.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez demander à votre adversaire de mélanger sa main dans son deck et de piocher une carte pour chacune des cartes Récompense qu'il lui reste.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes hacer que tu rival ponga las cartas de su mano en su baraja y las baraje todas, y robe 1 carta por cada una de las cartas de Premio que le queden.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi far rimischiare al tuo avversario le carte che ha in mano nel suo mazzo e fargli pescare una carta per ogni carta Premio che gli resta.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode fazer com que o seu oponente embaralhe sua mão em seu baralho e compre um card para cada um dos cards de Prêmio restantes do seu oponente.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du deinen Gegner dazu veranlassen, seine Handkarten in sein Deck zu mischen und 1 Karte für jede seiner noch übrigen Preiskarten zu ziehen."
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
				en: "Curse Deeply",
				fr: "Malédiction Intense",
				es: "Profunda Maldición",
				it: "Sortilegio",
				pt: "Maldição Profunda",
				de: "Nachhaltiger Fluch"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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

	thirdParty: {
		cardmarket: 286312,
		tcgplayer: 107185
	}
}

export default card
