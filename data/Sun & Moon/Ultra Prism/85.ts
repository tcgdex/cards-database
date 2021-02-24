import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		411,
	],
	hp: 160,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Earthen Shield",
				fr: "Bouclier de Terre",
			},
			effect: {
				en: "Prevent all damage done to your Metal Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.",
				fr: "Évitez tous les dégâts d’attaque infligés à vos Pokémon Metal par les Pokémon de votre adversaire auxquels est attachée de l’Énergie spéciale.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Push Down",
				fr: "Recul",
			},
			effect: {
				en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
