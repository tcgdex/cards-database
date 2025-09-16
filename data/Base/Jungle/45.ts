import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
		de: "Rizeros"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		112,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rhyhorn",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud'korne",
				de: "Hornattacke"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Ram",
				fr: "Défonce",
				de: "Ramme"
			},
			effect: {
				en: "Rhydon does 20 damage to itself. If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon. Switch the Pokémon even if Rhydon is knocked out.)",
				fr: "Rhinoféros s'inflige 20 dégâts. Si votre adversaire a au moins 1 Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec son Pokémon Défenseur. (Infligez les dégâts avant de faire l'échange des Pokémon. Échangez les Pokémon même si Rhinoféros est K.O.)",
				de: "Rizeros fügt sich selbst 20 Schadenspunkte zu. Falls dein gegner irgendwelche Pokémon auf der Bank hat, wählt er eines von ihnen und tauscht es mit dem verteidigenden Pokémon aus. (Füge die Schadenspunkte vor dem Auswechseln des Pokémon zu. Tausche das Pokémon auch wenn Rizeros kampfunfähig wird.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Son épiderme très épais lui permet de survivre dans un environnement de plus de 3600 degrés."
	},

	thirdParty: {
		cardmarket: 273842,
		tcgplayer: 45148
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	],
}

export default card
