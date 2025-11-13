import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Houndoom G",
		fr: "Demolosse ",
		de: "Hundemon G"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Black Cry",
				fr: "Cri noir",
				de: "Black Cry"
			},
			effect: {
				en: "The Defending Pokémon can't retreat or use any Poké-Powers during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite ou utiliser de Poké-Powers lors du prochain tour de votre adversaire.",
				de: "The Defending Pokémon can't retreat or use any Poke-Powers during your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Slash",
				fr: "Entaille",
				de: "Dark Slash"
			},
			effect: {
				en: "You may discard a Darkness Energy attached to Houndoom . If you do, this attack does 40 damage plus 20 more damage.",
				fr: "Vous pouvez défausser une Énergie Darkness attachée à Demolosse . Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires.",
				de: "You may discard a  Energy attached to Houndoom G. If you do, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 86215
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		}
	]
}

export default card
