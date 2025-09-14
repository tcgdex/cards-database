import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
		de: "Forstellka"
	},

	illustrator: "CR CG gangs",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Pineco",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Spikes",
				fr: "Picots"
			},
			effect: {
				en: "During your opponent's turn, whenever 1 of your opponent's Benched Pokémon becomes his or her Active Pokémon, Forretress does 10 damage to it. (Don't apply Weakness and Resistance.) This power stops working if Forretress is Asleep, Confused, or Paralyzed.",
				fr: "Pendant le tour de votre adversaire, si un des Pokémon de son Banc devient son Pokémon Actif, Foretress lui inflige 10 dégâts. (N'appliquez ni la Faiblesse, ni la Résistance.) Ce pouvoir ne fait plus effet si Foretress est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour rapide",
				de: "Rapid Spin"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with their Active Pokémon; then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, il en choisit un qu'il échange contre son Pokémon Actif. Puis, si vous avez des Pokémon sur votre Banc, vous échangez l'un d'eux contre votre Pokémon Actif. (Infligez les dégâts avant d'échanger les Pokémon.)",
				de: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)"
			},
			damage: 30,

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
			type: "Grass",
			value: "-30"
		},
	],

	description: {
		fr: "Son corps est protégé par une coquille dure comme l'acier. Ce que cache l'armure reste un mystère complet."
	},

	thirdParty: {
		cardmarket: 274513,
		tcgplayer: 85545
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

