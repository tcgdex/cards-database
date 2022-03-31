import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Deep Sea Swirl",
				fr: "Remous Abyssal",
				es: "Remolino de Alta Mar",
				it: "Vortice Abissale",
				pt: "Giro em Mar Profundo",
				de: "Tiefseewirbel"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 7 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 7 cartes.",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 7 cartas.",
				it: "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca sette carte.",
				pt: "Embaralhe a mão no seu baralho. Em seguida, compre 7 cards.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 7 Karten."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Balance Bind",
				fr: "Étreinte Équilibre",
				es: "Sujeción Equilibrada",
				it: "Equidestino",
				pt: "Ligação de Equilíbrio",
				de: "Gleichgewichtsfessel"
			},
			effect: {
				en: "If you and your opponent have the same number of Benched Pokémon, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Si votre adversaire et vous avez le même nombre de Pokémon de Banc, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Si tu rival y tú tenéis el mismo número de Pokémon en Banca, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Se hai lo stesso numero di Pokémon in panchina del tuo avversario, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Se você e o seu oponente tiverem o mesmo número de Pokémon no Banco, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wenn du und dein Gegner dieselbe Anzahl Pokémon auf der Bank haben, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
