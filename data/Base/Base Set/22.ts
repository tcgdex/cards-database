import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pidgeotto",
		pt: "Pidgeotto",
		fr: "Roucoups",
		de: "Tauboga"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		17,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidgey",
		pt: "Pidgey",
	},

	stage: "Stage1",

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
				de: "Falls Dein Gegner irgendwelche Poke,mon auf der Bank hat, muss er eines von ihnen wählen und mit dem verteidigenden pokemon austauschen. (Füge die Schadenspunkte vor dem Auswechseln der Pokémon zu.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mirror Move",
				pt: "Mirror Move",
				fr: "Mimique",
				de: "Spiegeltrick"
			},
			effect: {
				en: "If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokémon.",
				pt: "If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokémon.",
				fr: "Si Roucoups a été attaqué pendant le tour précédent, appliquez le résultat final de cette attaque infligée à Roucoups sur le Pokémon Défenseur.",
				de: "Falls Tauboga im letzten Ziug angegriffen wurde, füge dem verteidigenden Pokémon Schadenspunkte in Höhe der Endstärke dieses Angriffs zu."
			},

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
		fr: "Il protège son territoire avec ardeur et repousse à coups de bec tout intrus."
	}
}

export default card
