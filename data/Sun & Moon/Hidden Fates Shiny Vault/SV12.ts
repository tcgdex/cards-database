import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Frogadier",
		fr: "Croâporal",
		de: "Amphizel"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		657,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
		de: "Froxy"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gale Shuriken",
				fr: "Bourrasque Shuriken",
				de: "Shurikenwind"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Drip",
				fr: "Goutte à Goutte",
				de: "Spritzwasser"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		en: "Its swiftness is unparalleled. It can scale a tower of more than 2,000 feet in a minute's time.",
		de: "Seine Flinkheit sucht ihresgleichen. Es kann einen 600 m hohen Turm in weniger als einer Minute erklimmen."
	},
}

export default card
