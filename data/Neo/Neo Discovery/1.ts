import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
		de: "Psiana"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				de: "Psychokinese"
			},
			effect: {
				en: "Does 30 damage plus 10 more for each Energy Card attached to the Defending Pokémon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée au Pokémon Défenseur.",
				de: "Fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede an das verteidigende Pokémon angelegte Energiekarte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		en: "It uses the fine hair that covers its body to sense air currents and predict its enemy's actions.",
		fr: "La belle fourrure qui recouvre son corps peut sentir les courants aériens et prédire les actions de son ennemi.",
		de: "Es benutzt das feine Haar, mit dem sein Körper bedeckt ist, um Luftströme zu spüren und die Aktionen seines Gegners zu erahnen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274512,
				tcgplayer: 85316
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274512,
				tcgplayer: 85316
			}
		}
	]

}

export default card
