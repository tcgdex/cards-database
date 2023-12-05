import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Absol G",
		fr: "Absol ",
		de: "Absol G"
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 100,
	types: [
		"Darkness",
	],

	stage: "LEVEL-UP",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Darkness Send",
				fr: "Envoi obscur",
				de: "Finsternisentsendung"
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Absol G LV.X from your hand onto your Active Absol G, you may flip 3 coins. For each heads, put the top card from your opponent's deck in the Lost Zone.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Absol  NIV.X de votre main sur votre Absol  Actif, vous pouvez lancer 3 pièces. Pour chaque face, placez la carte du dessus du deck de votre adversaire dans la Zone Perdue.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Absol G LV.X von deiner Hand auf dein Aktives Absol G legst, 3 Münzen werfen. Lege für jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, die oberste Karte vom Deck deines Gegners ins Nirgendwo."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Slugger",
				fr: "Joueur obscur",
				de: "Finsternisschläger"
			},
			effect: {
				en: "You may discard a card from your hand. If you do, this attack does 30 damage plus 30 more damage.",
				fr: "Vous pouvez défausser une carte de votre main. Cette attaque inflige alors 30 dégâts plus 30 dégâts supplémentaires.",
				de: "Du kannst 1 Karte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
