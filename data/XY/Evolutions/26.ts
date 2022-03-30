import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Slowbro EX",
		fr: "Flagadoss EX",
		es: "Slowbro EX",
		it: "Slowbro EX",
		pt: "Slowbro EX",
		de: "Lahmus EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slack Off",
				fr: "Paresse",
				es: "Relajo",
				it: "Pigro",
				pt: "Relaxar",
				de: "Tagedieb"
			},
			effect: {
				en: "Heal 60 damage from this Pokémon. This Pokémon can't attack during your next turn.",
				fr: "Soignez 60 dégâts à ce Pokémon. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Cura 60 puntos de daño a este Pokémon. Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Cura questo Pokémon da 60 danni. Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Cure 60 de danos deste Pokémon. Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				de: "Heile 60 Schadenspunkte bei diesem Pokémon. Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Flash Splash",
				fr: "Éclaboussure Éclair",
				es: "Salpicadura Resplandor",
				it: "Splash Luminoso",
				pt: "Borrifada Rápida",
				de: "Blitzartiger Platscher"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic"
}

export default card
