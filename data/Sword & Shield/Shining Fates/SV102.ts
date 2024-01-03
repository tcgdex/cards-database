import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Bleuseille",
		en: "Corvisquire",
		es: "Corvisquire",
		it: "Corvisquire",
		pt: "Corvisquire",
		de: "Kranoviz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Minisange",
		en: "Rookidee"
	},

	attacks: [{
		name: {
			fr: "Picore",
			en: "Pluck",
			es: "Picoteo",
			it: "Spennata",
			pt: "Colher",
			de: "Pflücker"
		},

		effect: {
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Bec Vrille",
			en: "Drill Peck",
			es: "Pico Taladro",
			it: "Perforbecco",
			pt: "Bico Broca",
			de: "Bohrschnabel"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "Smart enough to use tools in battle, these Pokémon have been seen picking up rocks and flinging them or using ropes to wrap up enemies."
	}
}

export default card
