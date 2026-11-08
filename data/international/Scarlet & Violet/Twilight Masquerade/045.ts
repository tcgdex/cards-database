import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [119],
	set: Set,

	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'es-es': "Seaking",
		'it-it': "Seaking",
		'pt-br': "Seaking",
		'de-de': "Golking"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène",
		'es-es': "Goldeen",
		'it-it': "Goldeen",
		'pt-br': "Goldeen",
		'de-de': "Goldini"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Peck Off",
			'fr-fr': "Picpic Piqueur",
			'es-es': "Picotear",
			'it-it': "Sbeccata",
			'pt-br': "Arrancar com Bico",
			'de-de': "Lospicken"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Horn Drill",
			'fr-fr': "Empal'Korne",
			'es-es': "Perforador",
			'it-it': "Perforcorno",
			'pt-br': "Chifre Broca",
			'de-de': "Hornbohrer"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769219,
				tcgplayer: 550089
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769219,
				tcgplayer: 550089
			}
		},
	],

	illustrator: "Gemi",

}

export default card