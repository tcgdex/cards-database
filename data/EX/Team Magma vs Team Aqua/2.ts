import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Crawdaunt",
		fr: "Colhomard de Team Aqua",
		de: "Team Aquas Krebutack"
	},

	illustrator: "Nakaoka",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [342],

	hp: 80,

	types: [
		"Water",
		"Darkness"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Aqua Reverse",
				fr: "Aqua-revers",
				de: "Aquasog"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has Team Magma in its name and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire dont le nom comporte Team Aqua et l'échanger avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				de: "Bevor der Schaden zugefügt wird, kannst du 1 der Pokémon auf der Bank deines Gegners mit „Team Aqua“ im Namen gegen 1 der Verteidigenden Pokémon austauschen. Dein Gegner entscheidet, welches Verteidigende Pokémon ausgetauscht wird."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Deep Impact",
				fr: "Grosse collision",
				de: "Tiefseeschlag"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Paralysé.",
				de: "Wenn bereits Schadensmarken auf dem Verteidigenden Pokémon liegen, ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275779,
				tcgplayer: 89783
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275779,
				tcgplayer: 89783
			}
		},
	],

}

export default card
