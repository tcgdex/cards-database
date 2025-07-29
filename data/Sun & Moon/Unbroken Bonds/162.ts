import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Chatot",
		fr: "Pijako",
		es: "Chatot",
		it: "Chatot",
		pt: "Chatot",
		de: "Plaudagei"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		441,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mimic",
				fr: "Copie",
				es: "Mimético",
				it: "Mimica",
				pt: "Mímica",
				de: "Mimikry"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent’s hand.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
				it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
				pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 1 carta para cada carta na mão do seu oponente.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tone-Deaf",
				fr: "Dur d’Oreille",
				es: "Mal Oído",
				it: "Sordotono",
				pt: "Desafinar",
				de: "Unmusikalisch"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		cardmarket: 372450
	}
}

export default card
