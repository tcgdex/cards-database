import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Technical Machine TS-2",
		'fr-fr': "Machine Technique TS-2",
		'de-de': "Technische Maschine TS-2"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own.",
		'fr-fr': "Attachez cette carte à 1 de vos Pokémon en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne.",
		'de-de': "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstelle seiner eigenen Angriffe benutzen."
	},

	trainerType: "Technical Machine",

	attacks: [
		{
			name: {
				'de-de': "Devoluter",
				'fr-fr': "Dés-Évolutionneur",
			},
			effect: {
				'de-de': "Wähle 1 entwickeltes Pokémon deines Gegners (außer Pokémon LV.X). Entferne die höchste Evolutionskarte vom gewählten Pokémon, dein Gegner nimmt diese Karte auf seine Hand zurück.",
				'fr-fr': "Choisissez 1 des Pokémon Évolués de votre adversaire (Pokémon NIV.X exclus). Retirez à ce Pokémon sa carte au niveau d'Évolution le plus élevé et replacez cette carte dans la main de votre adversaire.",
			},
		},
	],

	thirdParty: {
		cardmarket: 278286,
		tcgplayer: 89854
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
