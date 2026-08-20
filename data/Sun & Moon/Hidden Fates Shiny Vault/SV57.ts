import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Electrode-GX",
		fr: "Électrode-GX",
		de: "Lektrobal-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 190,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Extra Energy Bomb",
				fr: "Bombe Extra-Énergétique",
				de: "Extra Energiebombe"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach 5 Energy cards from your discard pile to your Pokémon, except Pokémon-GX or Pokémon-EX, in any way you like. If you do, this Pokémon is Knocked Out.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher 5 cartes Énergie de votre pile de défausse à vos Pokémon, à l’exception des Pokémon-GX et Pokémon-EX, de la manière que vous voulez. Dans ce cas, ce Pokémon est mis K.O.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 5 Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon, außer Pokémon-GX oder Pokémon-EX, anlegen. Wenn du das machst, ist dieses Pokémon kampfunfähig."
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
				en: "Electro Ball",
				fr: "Boule Élek",
				de: "Elektroball"
			},

			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Crush and Burn-GX",
				fr: "Écra-Brûle-GX",
				de: "Falten und Frittieren-GX"
			},
			effect: {
				en: "Discard any amount of Energy from your Pokémon. This attack does 50 more damage for each card you discarded in this way. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez n’importe quel nombre d’Énergies de vos Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Lege beliebig viele Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 30,

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
	retreat: 1,



}

export default card
