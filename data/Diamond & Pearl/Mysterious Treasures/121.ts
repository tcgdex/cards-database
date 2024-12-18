import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Elekable",
		de: "Elevoltek"
	},
	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Shocking Tail",
				fr: "Choc-queue",
				de: "Elektroschweif"
			},
			effect: {
				en: "As long as Electivire is your Active Pokémon, whenever your opponent attaches an Energy card from his or her hand to 1 of his or her Pokémon, put 2 damage counters on that Pokémon.",
				fr: "Tant qu'Elekable est votre Pokémon Actif, lorsque votre adversaire attache une cartes Énergie de sa main à 1 de ses Pokémon, placez 2 marqueurs de dégât sur ce Pokémon.",
				de: "Solange Elevoltek dein Aktives Pokémon ist, lege jedes Mal, wenn dein Gegner 1 Energiekarte von seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf dieses Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Pulse Barrier",
				fr: "Barrière vibrante",
				de: "Impulsbarriere"
			},
			effect: {
				en: "Discard all of your opponent's Pokémon Tool cards and Stadium cards in play. If you do, prevent all effects, including damage, done to Electivire during your opponent's next turn.",
				fr: "Défaussez toutes les cartes Outil Pokémon et les cartes Stade que votre adversaire a en jeu. Prévenez alors tous les effets, dégâts inclus, infligés à Elekable lors du prochain tour de votre adversaire.",
				de: "Lege alle Pokémon-Ausrüstungs- und Stadion-Karten deines Gegners auf seinen Ablagestapel. Wenn du das machst, verhindere während des nächsten Zuges deines Gegners alle Effekte, einschließlich Schaden, die Elevoltek zugefügt werden."
			},
			damage: 50,

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
			type: "Metal",
			value: "-20"
		},
	],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	}
}

export default card
