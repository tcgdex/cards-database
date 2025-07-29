import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
		es: "Litwick",
		it: "Litwick",
		pt: "Litwick",
		de: "Lichtel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mirror Mirror",
				fr: "Miroir",
				es: "Espejo Espejito",
				it: "Specchio Specchio",
				pt: "Espelho Espelho",
				de: "Spieglein, Spieglein"
			},
			effect: {
				en: "Each player either draws or discards cards until that player has 4 cards in his or her hand. (Your opponent does this first.)",
				fr: "Chaque joueur pioche ou défausse des cartes jusqu'à avoir 4 cartes dans sa main. (Votre adversaire le fait en premier.)",
				es: "Cada jugador roba o descarta cartas hasta tener 4 cartas en su mano. (Tu rival lo hace primero).",
				it: "Ciascun giocatore pesca o scarta carte fino ad avere quattro carte in mano. Inizia il tuo avversario.",
				pt: "Cada jogador compra ou descarta cards até ter 4 cards na mão dele(a). (Seu oponente faz isso primeiro.)",
				de: "Jeder Spieler muss so viele Karten ziehen oder ablegen, bis der Spieler 4 Karten auf der Hand hat. (Dein Gegner beginnt.)"
			},

		},
		{
			cost: [
				"Psychic",
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
			damage: 20,

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
		cardmarket: 291540
	}
}

export default card
