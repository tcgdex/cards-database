import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [20],

	name: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'es-es': "Raticate",
		'es-mx': "Raticate",
		'de-de': "Rattikarl",
		'it-it': "Raticate",
		'pt-br': "Raticate"
	},

	evolveFrom: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
		'es-es': "Rattata",
		'es-mx': "Rattata",
		'de-de': "Rattfratz",
		'it-it': "Rattata",
		'pt-br': "Rattata",
	},

	illustrator: "Minahamu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scrape Off",
			'fr-fr': "Racler",
			'es-es': "Raspadura",
			'es-mx': "Raspadura",
			'de-de': "Wegkratzen",
			'it-it': "Raschiare",
			'pt-br': "Raspar o Tacho"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'es-mx': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente."
		},

		damage: 20
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Retaliatory Incisors",
			'fr-fr': "Incisives Vengeance",
			'es-es': "Incisivos Vengativos",
			'es-mx': "Incisivos Rencorosos",
			'de-de': "Vergeltender Nager",
			'it-it': "Incisivi Ritorsivi",
			'pt-br': "Incisivos Retaliatórios"
		},

		effect: {
			'en-us': "This attack does 40 damage for each damage counter on all of your Benched Rattata.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque marqueur de dégâts sur vos Rattata de Banc.",
			'es-es': "Este ataque hace 40 puntos de daño por cada contador de daño en cada uno de tus Rattata en Banca.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada contador de daño en cada uno de tus Rattata en Banca.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen Rattfratz auf deiner Bank 40 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 40 danni per ogni segnalino danno presente sui Rattata nella tua panchina.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada contador de dano em todos os seus Rattata no Banco."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684438,
				cardmarket: 877477
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684438,
				cardmarket: 877477
			}
		}
	],

}

export default card
