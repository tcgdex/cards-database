import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
		es: "Azelf",
		it: "Azelf",
		pt: "Azelf",
		de: "Tobutz"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		482,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psychic Abduction",
				fr: "Enlèvement Psy",
				es: "Abducción Psíquica",
				it: "Rapimento Psichico",
				pt: "Abdução Psíquica",
				de: "Psychoraub"
			},
			effect: {
				en: "You can use this attack only if you go second, and only on your first turn. Shuffle 1 of your opponent’s Benched Pokémon and all cards attached to it into their deck.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Mélangez l’un des Pokémon de Banc de votre adversaire et toutes les cartes qui lui sont attachées avec son deck.",
				es: "Puedes usar este ataque solo si sales segundo, y solo en tu primer turno. Pon 1 de los Pokémon en Banca de tu rival y todas las cartas unidas a él en su baraja y barájalas todas.",
				it: "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Rimischia uno dei Pokémon in panchina del tuo avversario e tutte le carte a esso assegnate nel suo mazzo.",
				pt: "Você só pode usar este ataque se for o segundo a jogar e somente na sua primeira vez de jogar. Embaralhe 1 dos Pokémon no Banco do seu oponente e todas as cartas ligadas a ele no baralho do seu oponente.",
				de: "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Mische 1 Pokémon auf der Bank deines Gegners und alle an es angelegten Karten in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				es: "Hipnorrayo",
				it: "Ipnobomba",
				pt: "Borrifada Hipnótica",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 355562,
		tcgplayer: 165694
	}
}

export default card
