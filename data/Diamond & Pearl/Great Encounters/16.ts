import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
		de: "Dialga"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Time Bellow",
				fr: "Appel temporel",
				de: "Zeitschrei"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Ziehe 1 Karte."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Flash Cannon",
				fr: "Luminocanon",
				de: "Lichtkanone"
			},
			effect: {
				en: "You may return all Energy cards attached to Dialga to your hand. If you do, remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
				fr: "Vous pouvez reprendre dans votre main toutes les cartes Énergie attachées à Dialga. Retirez alors au Pokémon Défenseur la carte au niveau d'Évolution le plus élevé et mélangez-la au deck de votre adversaire.",
				de: "Du kannst alle an Dialga angelegten Energiekarten zurück auf deine Hand nehmen. Wenn du das machst, entferne die höchste Evolutionskarte vom Verteidigenden Pokémon. Dein Gegner mischt diese Karte in sein Deck."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277918,
		tcgplayer: 84799
	}
}

export default card
