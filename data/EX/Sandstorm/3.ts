import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Cradily",
		fr: "Vacilys",
		de: "Wielie"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [346],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Lileep",
		fr: "Lilia",
		de: "Liliep"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Super Suction Cups",
				fr: "Super ventouses",
				de: "Super Saugnäpfe"
			},
			effect: {
				en: "As long as Cradily is your Active Pokémon, your opponent's Pokémon can't retreat.",
				fr: "Tant que Vacilys est votre Pokémon Actif, le Pokémon de votre adversaire ne peut pas battre en retraite.",
				de: "Solange Wielie dein Aktives Pokémon ist, kann dein Gegner keine Pokémon zurückziehen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lure Poison",
				fr: "Poison attractif",
				de: "Lockendes Gift"
			},
			effect: {
				en: "Before using this effect, you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon, if any. The Defending Pokémon is now Poisoned.",
				fr: "Avant d'utiliser cet effet, vous pouvez échanger le Pokémon Défenseur contre un des Pokémon du Banc de votre adversaire, s'il en a. Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Bevor du diesen Effekt anwendest, kannst du das Verteidigende Pokémon mit 1 der Pokémon auf der Bank deines Gegners austauschen. Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale",
				de: "Spiralsauger"
			},
			effect: {
				en: "Remove 2 damage counters from Cradily (remove 1 if there is only 1).",
				fr: "Retirez à Vacilys deux marqueurs de dégât (ou un s'il n'en a qu'un).",
				de: "Entferne 2 Schadensmarken von Wielie (entferne 1, falls Wielie nur 1 hat)."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275780,
				tcgplayer: 84451
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275780,
				tcgplayer: 84451
			}
		},
	],

}

export default card
