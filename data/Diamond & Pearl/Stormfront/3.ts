import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
		de: "Panferno"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		392,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Blaze Dance",
				fr: "Danse incendiaire",
				de: "Lodertanz"
			},
			effect: {
				en: "Once during your turn (before your attack), when you play Infernape from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, search your deck for up to 4 Fire Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Simiabraz de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck jusqu'à 4 cartes Énergie Fire et attachez-les à vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Panferno von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, 1 Münze werfen. Bei \"Kopf\" durchsuche dein Deck nach bis zu 4 -Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an. Mische dein Deck danach."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Close Combat",
				fr: "Combat rapproché",
				de: "Nahkampf"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Infernape by attacks is increased by 30 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Simiabraz par des attaques sont augmentés de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Panferno durch Angriffe zugefügt wird, um 30 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spreading Fire",
				fr: "Feu rampant",
				de: "Feuerübergriff"
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Infernape and this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Fire attachées à Simiabraz et cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Lege 2 an Panferno angelegte Feuer-Energien auf deinen Ablagestapel und dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],





}

export default card
