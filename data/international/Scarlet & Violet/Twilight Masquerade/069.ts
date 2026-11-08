import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [587],
	set: Set,

	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga",
		'es-es': "Emolga",
		'it-it': "Emolga",
		'pt-br': "Emolga",
		'de-de': "Emolga"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sky Wave",
			'fr-fr': "Vague Céleste",
			'es-es': "Onda Voladora",
			'it-it': "Aeronda",
			'pt-br': "Onda Celeste",
			'de-de': "Himmelswelle"
		},

		effect: {
			'en-us': "This attack also does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascun Pokémon in panchina, sia tuo che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank (deiner und der deines Gegners) 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",

	description: {
		'en-us': "As Emolga flutters through the air, it crackles with electricity. This Pokémon is cute, but it can cause a lot of trouble.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769243,
				tcgplayer: 550113
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769243,
				tcgplayer: 550113
			}
		},
	],

	illustrator: "Shimaris Yukichi",

}

export default card