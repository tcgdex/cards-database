import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},

	illustrator: "hatachu",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 90,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dragon’s Wish",
				'fr-fr': "Souhait du Dragon",
				'es-es': "Deseo de Dragón",
				'it-it': "Dragoderio",
				'pt-br': "Pedido do Dragão",
				'de-de': "Drachenwunsch"
			},
			effect: {
				'en-us': "During your next turn, you may attach any number of Energy cards from your hand to your Pokémon.",
				'fr-fr': "Pendant votre prochain tour, vous pouvez attacher autant de cartes Énergie que vous voulez de votre main à vos Pokémon.",
				'es-es': "Durante tu próximo turno, puedes unir cualquier cantidad de cartas de Energía de tu mano a tus Pokémon.",
				'it-it': "Durante il tuo prossimo turno, puoi assegnare un numero qualsiasi di carte Energia ai tuoi Pokémon dalla tua mano.",
				'pt-br': "Durante a sua próxima vez de jogar, você poderá ligar qualquer número de cartas de Energia da sua mão aos seus Pokémon.",
				'de-de': "Während deines nächsten Zuges kannst du beliebig viele Energiekarten aus deiner Hand an deine Pokémon anlegen."
			},

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Tail Smack",
				'fr-fr': "Coup de Queue",
				'es-es': "Bofetón Cola",
				'it-it': "Codasberla",
				'pt-br': "Ataque de Cauda",
				'de-de': "Schweifstreich"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "From time immemorial, it has been venerated by agricultural peoples as an entity able to control the weather.",
	},

	thirdParty: {
		cardmarket: 295406,
		tcgplayer: 126967
	}
}

export default card
