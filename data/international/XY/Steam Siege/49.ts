import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
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
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mirror Mirror",
				'fr-fr': "Miroir",
				'es-es': "Espejo Espejito",
				'it-it': "Specchio Specchio",
				'pt-br': "Espelho Espelho",
				'de-de': "Spieglein, Spieglein"
			},
			effect: {
				'en-us': "Each player either draws or discards cards until that player has 4 cards in his or her hand. (Your opponent does this first.)",
				'fr-fr': "Chaque joueur pioche ou défausse des cartes jusqu'à avoir 4 cartes dans sa main. (Votre adversaire le fait en premier.)",
				'es-es': "Cada jugador roba o descarta cartas hasta tener 4 cartas en su mano. (Tu rival lo hace primero).",
				'it-it': "Ciascun giocatore pesca o scarta carte fino ad avere quattro carte in mano. Inizia il tuo avversario.",
				'pt-br': "Cada jogador compra ou descarta cards até ter 4 cards na mão dele(a). (Seu oponente faz isso primeiro.)",
				'de-de': "Jeder Spieler muss so viele Karten ziehen oder ablegen, bis der Spieler 4 Karten auf der Hand hat. (Dein Gegner beginnt.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Flickering Flames",
				'fr-fr': "Flammes Vacillantes",
				'es-es': "Llamas Titilantes",
				'it-it': "Guizzafiamme",
				'pt-br': "Chamas Tremeluzentes",
				'de-de': "Züngelnde Flammen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
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

	description: {
		'en-us': "It arrives near the moment of death and steals spirit from the body.",
	},

	thirdParty: {
		cardmarket: 291540,
		tcgplayer: 121138
	}
}

export default card
