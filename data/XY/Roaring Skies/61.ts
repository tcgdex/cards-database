import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "M Rayquaza EX",
		fr: "M-Rayquaza EX",
		es: "M-Rayquaza EX",
		it: "M Rayquaza EX",
		pt: "M-Rayquaza EX",
		de: "M-Rayquaza EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 230,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
		es: "Rayquaza-EX",
		it: "Rayquaza-EX",
		pt: "Rayquaza-EX",
		de: "Rayquaza-EX"
	},

	stage: "MEGA",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Jungle Δ",
				en: "Δ Wild",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Grass, Fire, Water ou Lightning de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				en: "Any damage done to this Pokémon by attacks from your opponent's Grass, Fire, Water, or Lightning Pokémon is reduced by 20 (after applying Weakness and Resistance).",
				es: "{title}: Cualquier daño infligido a este Pokémon por ataques de los Pokémon Grass, Fire, Water o Lightning de tu rival se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "{title}: I danni inflitti a questo Pokémon dagli attacchi dei Pokémon Grass, Fire, Water o Lightning del tuo avversario sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "{title}: Qualquer dano feito a este Pokémon por ataques de Pokémon Grass, Fire, Water ou Lightning do seu oponente será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "{title}: Schaden, der diesem Pokémon durch Angriffe der Grass-, Fire-, Water- oder Lightning-Pokémon deines Gegners zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Ascent",
				fr: "Draco Ascension",
				es: "Ascenso Draco",
				it: "Ascesa del Drago",
				pt: "Ascenção do Dragão",
				de: "Zenitstürmer"
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon.",
				fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
				es: "Descarta 2 Energías unidas a este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias ligadas a este Pokémon.",
				de: "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 300,

		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "EX"
}

export default card
