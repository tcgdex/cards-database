import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		de: "Lucario"
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
				en: "Stance",
				fr: "Position",
				de: "Abwehrhaltung"
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Lucario LV.X from your hand onto your Active Lucario, you may use this power. Prevent all effects of an attack, including damage, done to Lucario during your opponent's next turn. (If Lucario is no longer your Active Pokémon, this effect ends.)",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Lucario NIV.X de votre main sur votre Lucario Actif, vous pouvez utiliser ce pouvoir. Prévenez tous les effets d'une attaque, dégâts inclus infligés à Lucario lors du prochain tour de votre adversaire. (Si Lucario n'est plus votre Pokémon Actif, cet effet se termine.)",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Lucario Lv.X auf dein aktives Lucario legst, diese Poké-Power benutzen. Verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angiffs, einschließlich Schaden, die Lucario zugefügt werden. (Wenn Lucario nicht mehr dein Aktives Pokémon ist, endet dieser Effekt.)"
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
				en: "Close Combat",
				fr: "Close Combat",
				de: "Nahkampf"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Lucario by attacks is increased by 30 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous les dégâts infligés à Lucario par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegeners wird Schaden, der Lucario durch Angriffe zugefügt wird, um 30 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden.)"
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

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		pt: "Riolu",
		de: "Riolu"
	}
}

export default card
