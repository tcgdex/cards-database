import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [628],
	set: Set,

	name: {
		'en-us': "Braviary",
		'fr-fr': "Gueriaigle",
		'es-es': "Braviary",
		'it-it': "Braviary",
		'pt-br': "Braviary",
		'de-de': "Washakwil"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'es-es': "Rufflet",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'de-de': "Geronimatz"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Drag Off",
			'fr-fr': "Traîne",
			'es-es': "Jalón",
			'it-it': "Trascinato Via",
			'pt-br': "Arrastar para Fora",
			'de-de': "Wegzerren"
		},

		effect: {
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 40 damage to the new Active Pokémon.",
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 40 puntos de daño al nuevo Pokémon Activo.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 40 danni al nuovo Pokémon attivo.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 40 pontos de dano ao novo Pokémon Ativo.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 40 Schadenspunkte zu."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Blasting Wind",
			'fr-fr': "Vent Impitoyable",
			'es-es': "Vientos Explosivos",
			'it-it': "Vento Distruttivo",
			'pt-br': "Vendaval Avassalador",
			'de-de': "Peitschender Wind"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794526,
				tcgplayer: 589878
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794526,
				tcgplayer: 589878
			}
		},
	],

	illustrator: "Anesaki Dynamic",

}

export default card
