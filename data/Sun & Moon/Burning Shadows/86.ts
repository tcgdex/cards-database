import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rule of Evil",
				fr: "Règne Maléfique",
				es: "Reino del Mal",
				it: "Regno del Male",
				pt: "Reinado do Mal",
				de: "Herrschaft des Bösen"
			},
			effect: {
				en: "This attack does 60 damage to each Pokémon that has an Ability (both yours and your opponent’s). (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 60 dégâts à chacun des Pokémon ayant un talent (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 60 puntos de daño a cada Pokémon que tenga una habilidad (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 60 danni a ogni Pokémon che abbia un’abilità, sia tuoi che del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 60 pontos de dano a cada um dos Pokémon que tiver uma Habilidade (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Diese Attacke fügt jedem Pokémon (deinen und denen deines Gegners), das eine Fähigkeit hat, 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 70,

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

	retreat: 0,

	thirdParty: {
		cardmarket: 299488,
		tcgplayer: 138576
	}
}

export default card
