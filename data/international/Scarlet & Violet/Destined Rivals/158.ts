import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [819],
	set: Set,

	name: {
		'en-us': "Arven's Skwovet",
		'fr-fr': "Rongourmand de Pepper",
		'de-de': "Peppers Raffel",
		'it-it': "Skwovet di Pepe",
		'es-es': "Skwovet de Damián",
		'pt-br': "Skwovet do Arven",
		'es-mx': "Skwovet de Damián"
	},


	illustrator: "Oswaldo KATO",

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gnaw Through",
			'fr-fr': "Grignotage",
			'de-de': "Durchnagen",
			'it-it': "Rosicchiadentro",
			'es-es': "Roedura Perforante",
			'pt-br': "Roída Interrupta",
			'es-mx': "Roedura Perforante"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'es-mx': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826032,
				tcgplayer: 632960
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826032,
				tcgplayer: 632960
			}
		},
	],
}

export default card
