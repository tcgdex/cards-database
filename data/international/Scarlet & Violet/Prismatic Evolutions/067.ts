import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'pt-br': "Bronzong",
		'it-it': "Bronzong",
		'de-de': "Bronzong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'pt-br': "Bronzor",
		'it-it': "Bronzor",
		'de-de': "Bronzel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Protective Bell",
			'fr-fr': "Cloche Protectrice",
			'es-es': "Campana Protectora",
			'pt-br': "Sino Protetor",
			'it-it': "Campana Protettiva",
			'de-de': "Schutzglocke"
		},

		effect: {
			'en-us': "All of your Pokémon take 10 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			'fr-fr': "Tous vos Pokémon subissent 10 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de los Pokémon de tu rival hacen 10 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Todos os seus Pokémon recebem 10 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'it-it': "I tuoi Pokémon subiscono 10 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'de-de': "Allen deinen Pokémon werden durch Attacken von Pokémon deines Gegners 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'pt-br': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'de-de': "Schwerer Einschlag"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "Scav",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805456,
				tcgplayer: 610422
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805456,
				tcgplayer: 610422
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806502,
				tcgplayer: 610584
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806503,
				tcgplayer: 610685
			}
		},
	],
}

export default card
