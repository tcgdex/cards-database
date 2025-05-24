import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pidgey",
		pt: "Pidgey",
		fr: "Roucool",
		de: "Taubsi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		16,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				pt: "Whirlwind",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				pt: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Si votre adversaire a au moins un Pokémon sur le Banc, il ou elle choisit l'1 d'eux et l'échange avec le Pokémon Défenseur. (Appliquez les dégâts avant d'échanger les Pokémon.)",
				de: "Falls Dein gegner irgendwelche Pokémon auf der Bank hat, muss er eines von ihnen wählen und mit dem verteidigenden Pokémon austauschen. (Fühe die Schadenspunkte vor dem Auswechseln des Pokémon zu.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il est souvent vu dans les forêts. Il brasse l'air de ses ailes près du sol pour projeter du sable."
	}
}

export default card
