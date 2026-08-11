import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'de-de': "Lucario"
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 110,
	types: [
		"Fighting",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Stance",
				'fr-fr': "Position",
				'de-de': "Abwehrhaltung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), when you put Lucario LV.X from your hand onto your Active Lucario, you may use this power. Prevent all effects of an attack, including damage, done to Lucario during your opponent's next turn. (If Lucario is no longer your Active Pokémon, this effect ends.)",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Lucario NIV.X de votre main sur votre Lucario Actif, vous pouvez utiliser ce pouvoir. Prévenez tous les effets d'une attaque, dégâts inclus infligés à Lucario lors du prochain tour de votre adversaire. (Si Lucario n'est plus votre Pokémon Actif, cet effet se termine.)",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Lucario Lv.X auf dein aktives Lucario legst, diese Poké-Power benutzen. Verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angiffs, einschließlich Schaden, die Lucario zugefügt werden. (Wenn Lucario nicht mehr dein Aktives Pokémon ist, endet dieser Effekt.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Close Combat",
				'fr-fr': "Close Combat",
				'de-de': "Nahkampf"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Lucario by attacks is increased by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous les dégâts infligés à Lucario par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegeners wird Schaden, der Lucario durch Angriffe zugefügt wird, um 30 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden.)"
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
		}
	],
}

export default card
