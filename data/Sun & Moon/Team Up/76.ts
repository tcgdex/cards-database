import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
		es: "Omastar",
		it: "Omastar",
		pt: "Omastar",
		de: "Amoroso"
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fossil Bind",
				fr: "Lien Fossile",
				es: "Atadura Fósil",
				it: "Legame Fossile",
				pt: "Atadura de Fóssil",
				de: "Fossiler Griff"
			},
			effect: {
				en: "As long as you have fewer Pokémon in play than your opponent, they can’t play any Item cards from their hand.",
				fr: "Tant que vous avez moins de Pokémon en jeu que votre adversaire, celui-ci ne peut pas jouer de cartes Objet de sa main.",
				es: "Mientras tengas menos Pokémon en juego que tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
				it: "Fintanto che hai meno Pokémon in gioco del tuo avversario, questi non può giocare le carte Strumento che ha in mano.",
				pt: "Enquanto você tiver menos Pokémon em jogo do que seu oponente, ele(a) não pode jogar nenhuma carta de Item da própria mão.",
				de: "Solang du weniger Pokémon im Spiel hast als dein Gegner, kann dein Gegner keine Itemkarten aus seiner Hand spielen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
