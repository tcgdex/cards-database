import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai",
		de: "Darkrai"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Darkness Roar",
				fr: "Rugissement obscur",
				de: "Finsteres Gebrüll"
			},
			effect: {
				en: "You may have your opponent switch the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d'échanger le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Du kannst deinen Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank austauschen lassen."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Sleep Hole",
				fr: "Trou-dodo",
				de: "Schlafloch"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, this attack does 40 damage plus 40 more damage. If the Defending Pokémon is not Asleep, that Pokémon is now Asleep.",
				fr: "Si le Pokémon Défenseur est Endormi, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires. Si le Pokémon Défenseur n'est pas Endormi, il est maintenant Endormi.",
				de: "Wenn das Verteidigende Pokémon schläft, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu. Wenn das Verteidigende Pokémon nicht schläft, schläft es jetzt."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
