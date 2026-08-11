import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [636],
	set: Set,

	name: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'de-de': "Ignivor",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'es-es': "Larvesta",
		'es-mx': "Larvesta"
	},

	illustrator: "Katsunori Sato",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peck Off",
			'fr-fr': "Picpic Piqueur",
			'de-de': "Lospicken",
			'it-it': "Sbeccata",
			'pt-br': "Arrancar com Bico",
			'es-es': "Picotear",
			'es-mx': "Picotear"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'es-mx': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836105,
				tcgplayer: 642552
			}
		},
	]
}

export default card
