import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram",
		'es-es': "Beheeyem",
		'it-it': "Beheeyem",
		'pt-br': "Beheeyem",
		'de-de': "Megalon"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		606,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psypunch",
				'fr-fr': "Coup de Poing Psy",
				'es-es': "Psicopuño",
				'it-it': "Psicopugno",
				'pt-br': "Soco Psíquico",
				'de-de': "Psyhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mysterious Noise",
				'fr-fr': "Bruit Mystérieux",
				'es-es': "Ruido Misterioso",
				'it-it': "Rumore Misterioso",
				'pt-br': "Ruído Misterioso",
				'de-de': "Geheimnisvolle Laute"
			},
			effect: {
				'en-us': "Shuffle this Pokémon and all cards attached to it into your deck. Your opponent can’t play any Item cards from their hand during their next turn.",
				'fr-fr': "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck. Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
				'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu baraja, y barájalas todas. Tu rival no puede jugar ninguna carta de Objeto de su mano durante su próximo turno.",
				'it-it': "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo. Il tuo avversario non può giocare le carte Strumento che ha in mano durante il suo prossimo turno.",
				'pt-br': "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho. Seu oponente não poderá jogar nenhuma carta de Item da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Mische dieses Pokémon und alle an es angelegten Karten in dein Deck. Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "With its psychic powers, it rewrites its opponents' memories. You, too, may have already had your memories rewritten.",
	},

	thirdParty: {
		cardmarket: 388267,
		tcgplayer: 195023
	}
}

export default card
