import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [330],
	set: Set,

	name: {
		'en-us': "Flygon",
		'fr-fr': "Libégon",
		'es-es': "Flygon",
		'it-it': "Flygon",
		'pt-br': "Flygon",
		'de-de': "Libelldra"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'es-es': "Vibrava",
		'it-it': "Vibrava",
		'pt-br': "Vibrava",
		'de-de': "Vibrava"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Desert Pillar",
			'fr-fr': "Pilier du Désert",
			'es-es': "Columna del Desierto",
			'it-it': "Pilastro del Deserto",
			'pt-br': "Coluna do Deserto",
			'de-de': "Wüstensäule"
		},

		effect: {
			'en-us': "This attack does 50 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Blasting Wind",
			'fr-fr': "Vent Impitoyable",
			'es-es': "Vientos Explosivos",
			'it-it': "Vento Distruttivo",
			'pt-br': "Vendaval Avassalador",
			'de-de': "Peitschender Wind"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon hides in the heart of sandstorms it creates and seldom appears where people can see it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608526,
				tcgplayer: 263792
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608526,
				tcgplayer: 263792
			}
		},
	],
}

export default card
