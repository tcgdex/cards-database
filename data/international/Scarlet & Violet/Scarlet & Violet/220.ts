import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [983],
	set: Set,

	name: {
		'en-us': "Kingambit",
		'fr-fr': "Scalpereur",
		'es-es': "Kingambit",
		'it-it': "Kingambit",
		'pt-br': "Kingambit",
		'de-de': "Gladimperio"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Leadership",
			'fr-fr': "Leadership",
			'es-es': "Liderato",
			'it-it': "Leadership",
			'pt-br': "Liderança",
			'de-de': "Leadership"
		},

		effect: {
			'en-us': "Your Basic Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques de vos Pokémon de base infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de tus Pokémon Básicos hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi dei tuoi Pokémon Base infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques dos seus Pokémon Básicos causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken deiner Basis-Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Hack At",
			'fr-fr': "Entaillage",
			'es-es': "Machetear",
			'it-it': "Recisione",
			'pt-br': "Picotada",
			'de-de': "Zerhacken"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "Only a Bisharp that stands above all others in its vast army can evolve into Kingambit.",
	},

	thirdParty: {
        cardmarket: 702516,
        tcgplayer: 490078
    }
}

export default card