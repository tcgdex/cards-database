import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
		de: "Letarking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [289],

	hp: 120,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
		de: "Muntier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lazy",
				fr: "Fainéant",
				de: "Faulheit"
			},
			effect: {
				en: "As long as Slaking is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
				fr: "Tant que Monaflemit est votre Pokémon Actif, le Pokémon de votre adversaire ne peut utiliser de Poké-Powers.",
				de: "Solange Letarking dein Aktives Pokémon ist, können gegnerische Pokémon keine Poké-Power benutzen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Critical Move",
				fr: "Mouvement décisif",
				de: "Entscheidung"
			},
			effect: {
				en: "Discard a basic Energy card attached to Slaking or this attack does nothing. Slaking can't attack during your next turn.",
				fr: "Défaussez une carte Énergie de base attachée à Monaflemit ou cette attaque est sans effet. Monaflemit ne pourra pas attaquer pendant votre prochain tour.",
				de: "Entferne 1 Basis-Energiekarte von Letarking und lege sie auf den Ablagestapel, sonst hat dieser Angriff keine Auswirkungen. Letarking kann in deinem nächsten Zug nicht angreifen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275660,
				tcgplayer: 89288
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275660,
				tcgplayer: 89288
			}
		},
	],

}

export default card
