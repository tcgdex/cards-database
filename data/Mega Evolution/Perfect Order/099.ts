import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Raticate",
		fr: "Rattatac",
		es: "Raticate",
		'es-mx': "Raticate",
		de: "Rattikarl",
		it: "Raticate",
		pt: "Raticate"
	},

	illustrator: "Mina Nakai",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scrape Off",
			fr: "Racler",
			es: "Raspadura",
			'es-mx': "Raspadura",
			de: "Wegkratzen",
			it: "Raschiare",
			pt: "Raspar o Tacho"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'es-mx': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente."
		},

		damage: 20
	}, {
		cost: ["Colorless"],

		name: {
			en: "Retaliatory Incisors",
			fr: "Incisives Vengeance",
			es: "Incisivos Vengativos",
			'es-mx': "Incisivos Rencorosos",
			de: "Vergeltender Nager",
			it: "Incisivi Ritorsivi",
			pt: "Incisivos Retaliatórios"
		},

		effect: {
			en: "This attack does 40 damage for each damage counter on all of your Benched Rattata.",
			fr: "Cette attaque inflige 40 dégâts pour chaque marqueur de dégâts sur vos Rattata de Banc.",
			es: "Este ataque hace 40 puntos de daño por cada contador de daño en cada uno de tus Rattata en Banca.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada contador de daño en cada uno de tus Rattata en Banca.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen Rattfratz auf deiner Bank 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ogni segnalino danno presente sui Rattata nella tua panchina.",
			pt: "Este ataque causa 40 pontos de dano para cada contador de dano em todos os seus Rattata no Banco."
		},

		damage: "40×"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684439,
		cardmarket: 877516
	}
}

export default card
