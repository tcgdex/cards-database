import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Mawile",
		fr: "Mysdibule",
		de: "Flunkifer"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [303],

	hp: 60,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scam",
				fr: "Arnaque",
				de: "Ausgetrickst"
			},
			effect: {
				en: "Look at your opponent's hand. You may have your opponent shuffle a Supporter card you find there into his or her deck. If you do, your opponent draws a card.",
				fr: "Regardez la main de votre adversaire. Si vous y trouvez une carte Supporter, vous pouvez demander à votre adversaire de la mélanger de nouveau à son deck. Dans ce cas, votre adversaire pioche une carte.",
				de: "Schau dir die Handkarten deines Gegners an. Falls du dort eine Unterstützerkarte findest, kannst du deinen Gegner diese zurück in sein Deck mischen lassen. Wenn du das machst, zieht dein Gegner eine Karte."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Hook",
				fr: "Crochet métallique",
				de: "Metallhaken"
			},
			effect: {
				en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, vous pouvez échanger un des Pokémon Défenseur de votre adversaire contre un des Pokémon de son Banc. Dans ce cas, cette attaque inflige 20 dégâts au nouveau Pokémon Défenseurs.",
				de: "Bevor der Schaden zugefügt wird kannst du 1 der Pokémon auf der Bank deines Gegners gegen 1 der Verteidigenden Pokémon austauschen. Wenn du dies machst, fügt dieser Angriff dem neuen Verteidigenden Pokémon 20 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275786,
				tcgplayer: 87257
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275786,
				tcgplayer: 87257
			}
		},
	],

}

export default card
