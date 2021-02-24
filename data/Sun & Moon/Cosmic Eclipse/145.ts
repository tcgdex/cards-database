import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Ninetales",
		fr: "Feunard d’Alola",
	},
	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Rubbish Blizzard",
				fr: "Blizzard de Déchets",
			},
			effect: {
				en: "This attack does 10 damage for each Pokémon Tool card in your discard pile.",
				fr: "Cette attaque inflige 10 dégâts pour chaque carte Outil Pokémon dans votre pile de défausse.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
