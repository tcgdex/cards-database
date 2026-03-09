import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Unown [B]",
		fr: "Zarbi B",
		de: "Icognito B"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[Bear]",
				fr: "Bear",
				de: "Bear"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon with Unown in its name to Unown . This power can't be used if Unown has 10 HP left. This power can be used even if Unown is Asleep, Confused, or Paralyzed.",
				fr: "Une fois durant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts d'un de vos Pokémon Zarbi sur Zarbi B. Ce pouvoir ne fonctionne pas si Zarbi B n'a que 10 PV. Ce pouvoir fonctionne même si Zarbi B est Endormi, Confus ou Paralysé.",
				de: "Du kannst einmal während deines Zuges (vor deinem Angriff) eine Schadensmarke von einem deiner Pokémon, die Icognito in ihrem Namen haben, herunternehmen und auf Icognito B legen. Diese Fähigkeit kann nicht verwendet werden, wenn dadurch Icognito B kampfunfähig würde. (Diese Fähigkeit wirkt selbst dann, wenn icognito B schläft, verwirrt oder gelähmt ist.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},

	thirdParty: {
		cardmarket: 274625,
		tcgplayer: 90199
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

