import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [319],
	set: Set,

	name: {
		'fr-fr': "Sharpedo",
		'en-us': "Sharpedo",
		'es-es': "Sharpedo",
		'it-it': "Sharpedo",
		'pt-br': "Sharpedo",
		'de-de': "Tohaido"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Carvanha",
		'en-us': "Carvanha",
		'es-es': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
		'de-de': "Kanivanha"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Impact Aqua",
			'en-us': "Aqua Impact",
			'es-es': "Impacto Aqua",
			'it-it': "Acquimpatto",
			'pt-br': "Impacto Aqua",
			'de-de': "Aqua-Einschlag"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 30 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Bélier Volant",
			'en-us': "Jet Headbutt",
			'es-es': "Turbocabezazo",
			'it-it': "Zuccata Jet",
			'pt-br': "Cabeçada a Jato",
			'de-de': "Flinke Kopfnuss"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon is known as the Bully of the Sea. Any ship entering the waters Sharpedo calls home will be attacked—no exceptions.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725127,
				tcgplayer: 509770,
				cardtrader: 255607
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725127,
				tcgplayer: 509770,
				cardtrader: 255607
			}
		},
	],

	illustrator: "Tonji Matsuno",

	
}

export default card
