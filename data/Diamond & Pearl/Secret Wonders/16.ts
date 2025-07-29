import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou",
		de: "Raikou"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Thunder Rumble",
				fr: "Roulement de tonnerre",
				de: "Grollender Donner"
			},
			effect: {
				en: "Once during your turn (before your attack), when you attach a Lightning Energy card from your hand to Raikou, you may put 1 damage counter on 1 of your opponent's Benched Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous attachez une carte Énergie Lightning de votre main à Raikou, vous pouvez placer 1 marqueur de dégât sur 1 des Pokémon de Banc de votre adversaire.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du 1 -Energiekarte von der Hand an Raikou anlegst, 1 Schadensmarke auf 1 Pokémon auf der Bank deines Gegners legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunder Climb",
				fr: "Tonnerre grimpant",
				de: "Ansteigender Donner"
			},
			effect: {
				en: "Discard 3 cards from the top of your deck. This attack does 50 damage plus 10 more damage for each Lightning Energy card you discarded. Then, attach those Lightning Energy cards to 1 of your Pokémon.",
				fr: "Défaussez 3 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Lightning défaussée. Ensuite, attachez ces cartes Énergie Lightning à 1 de vos Pokémon.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 50 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf diese Weise auf den Ablagestapel gelegte -Energiekarte zu. Danach lege diese -Energiekarten an 1 deiner Pokémon an."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277769
	}
}

export default card
