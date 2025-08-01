import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
		de: "Milotic"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Marvel Scale",
				fr: "Écaille spé.",
				de: "Notschutz"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Milotic by your opponent's Pokémon LV.X.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Milobellus par les Pokémon LV.X de votre adversaire.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Milotic von Pokémon LV.X deines Gegners zugefügt würden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twister",
				fr: "Ouragan",
				de: "Windhose"
			},
			effect: {
				en: "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Si ce sont 2 piles, cette attaque est sans effet. Pour chaque face, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 2 Münzen. Wenn beide \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen. Lege pro \"Kopf\" eine an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277927,
		tcgplayer: 87454
	}
}

export default card
