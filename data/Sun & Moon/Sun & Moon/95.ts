import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
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
		en: "Dratini",
		fr: "Minidraco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon’s Wish",
				fr: "Souhait du Dragon",
				es: "Deseo de Dragón",
				it: "Dragoderio",
				pt: "Pedido do Dragão",
				de: "Drachenwunsch"
			},
			effect: {
				en: "During your next turn, you may attach any number of Energy cards from your hand to your Pokémon.",
				fr: "Pendant votre prochain tour, vous pouvez attacher autant de cartes Énergie que vous voulez de votre main à vos Pokémon.",
				es: "Durante tu próximo turno, puedes unir cualquier cantidad de cartas de Energía de tu mano a tus Pokémon.",
				it: "Durante il tuo prossimo turno, puoi assegnare un numero qualsiasi di carte Energia ai tuoi Pokémon dalla tua mano.",
				pt: "Durante a sua próxima vez de jogar, você poderá ligar qualquer número de cartas de Energia da sua mão aos seus Pokémon.",
				de: "Während deines nächsten Zuges kannst du beliebig viele Energiekarten aus deiner Hand an deine Pokémon anlegen."
			},

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tail Smack",
				fr: "Coup de Queue",
				es: "Bofetón Cola",
				it: "Codasberla",
				pt: "Ataque de Cauda",
				de: "Schweifstreich"
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



}

export default card
