import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		de: "Traunfugil"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		fr: "Feuforêve",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Lullaby",
				fr: "Comptine",
				de: "Wiegenlied"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Nightmare Feast",
				fr: "Festin cauchemardesque",
				de: "Alptraumgelage"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, this attack does 50 damage and remove 5 damage counters from Misdreavus. If the Defending Pokémon is not Asleep, this attack does nothing.",
				fr: "Si le Pokémon Défenseur est Endormi, cette attaque inflige 50 dégâts et retire à Feuforêve 5 marqueurs de dégât. Si le Pokémon Défenseur n'est pas Endormi, cette attaque est sans effet.",
				de: "Wenn das Verteidigende Pokémon schläft, fügt dieser Angriff 50 Schadenspunkte zu und entferne 5 Schadensmarken von Traunfugil. Wenn das Verteidigende Pokémon nicht schläft, hat dieser Angriff keine Auswirkungen."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il adore se faufiler derrière les gens la nuit pour les effrayer avec son cri strident."
	}
}

export default card
