import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Noivern",
		fr: "Bruyverne",
		es: "Noivern",
		it: "Noivern",
		pt: "Noivern",
		de: "UHaFnir"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		715,
	],
	hp: 100,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		it: "Noibat",
		pt: "Noibat",
		de: "eF-eM"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tuning",
				fr: "Accordage",
				es: "Afinar",
				it: "Sintonizzazione",
				pt: "Afinação",
				de: "Tuning"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire.",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba un número de cartas igual al número de cartas en la mano de tu rival.",
				it: "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca un numero di carte pari a quelle che ha in mano il tuo avversario.",
				pt: "Embaralhe a mão no seu baralho. Agora compre o número de cards equivalente ao número de cards na mão do seu oponente.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend genauso viele Karten, wie dein Gegner auf der Hand hat."
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d'Air",
				es: "Tajo Aéreo",
				it: "Eterelama",
				pt: "Golpe de Ar",
				de: "Luftschnitt"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
