import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Barrier Shrine",
				fr: "Sanctuaire",
				es: "Barrera Santuario",
				it: "Barriera Sacra",
				pt: "Santuário da Barreira",
				de: "Absperrstätte"
			},
			effect: {
				en: "Each player can't play any Stadium cards from his or her hand.",
				fr: "Aucun joueur ne peut jouer de cartes Stade de sa main.",
				es: "Los jugadores no pueden jugar ninguna carta de Estadio de su mano.",
				it: "Nessun giocatore può giocare carte Stadio dalla propria mano.",
				pt: "Nenhum jogador pode jogar cards de Estádio da própria mão.",
				de: "Kein Spieler darf Stadionkarten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flickering Flames",
				fr: "Flammes Vacillantes",
				es: "Llamas Titilantes",
				it: "Guizzafiamme",
				pt: "Chamas Tremeluzentes",
				de: "Züngelnde Flammen"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 273552,
		tcgplayer: 95905
	}
}

export default card
