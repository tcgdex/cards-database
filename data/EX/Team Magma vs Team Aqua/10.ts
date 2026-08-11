import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Houndoom",
		fr: "Démolosse de Team Magma",
		de: "Team Magmas Hundemon"
	},

	illustrator: "Ken Ikuji",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 70,

	types: [
		"Fire",
		"Darkness"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Roasting Heat",
				fr: "Rôtissoire",
				de: "Bratende Hitze"
			},
			effect: {
				en: "If the Defending Pokémon is Burned, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est Brûlé, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon verbrannt ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magma Spurt",
				fr: "Jet de Magma",
				de: "Sprudelndes Magma"
			},
			effect: {
				en: "Discard the top 5 cards from your deck. This attack does 30 damage times the number of Fire and Fighting basic Energy cards discarded in this way.",
				fr: "Défaussez les 5 premières cartes de votre deck. Cette attaque inflige 30 dégâts multipliés par le nombre de carte Énergie de base  et  défaussées.",
				de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt für jede {R}- und {F}-Basis-Energiekarte, die auf diese Weise abgelegt wurde, 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275787,
				tcgplayer: 89828
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275787,
				tcgplayer: 89828
			}
		},
	],

}

export default card
