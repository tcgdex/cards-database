import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [831],
	set: Set,

	name: {
		'en-us': "Wooloo",
		'fr-fr': "Moumouton",
		'es-es': "Wooloo",
		'it-it': "Wooloo",
		'pt-br': "Wooloo",
		'de-de': "Wolly"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Miki Tanaka",

	description: {
		'en-us': "If its fleece grows too long, Wooloo won't be able to move. Cloth made with the wool of this Pokémon is surprisingly strong."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Derail",
			'fr-fr': "Déraillement",
			'de-de': "Entgleisen",
			'es-es': "Descarrilar",
			'pt-br': "Descarrilhar",
			'it-it': "Deragliamento"
		},

		damage: 10,

		effect: {
			'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Let's All Rollout",
			'fr-fr': "Roulade Collégiale",
			'de-de': "Gemeinsamer Walzer",
			'es-es': "Todos a Rodar",
			'pt-br': "Vamos Botar pra Rolar",
			'it-it': "Rotolamento Collettivo"
		},

		damage: "20×",

		effect: {
			'en-us': "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de Banc ayant l'attaque Roulade Collégiale.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank, das die Attacke Gemeinsamer Walzer hat, 20 Schadenspunkte zu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca que tenga el ataque Todos a Rodar.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon no Banco que tiver o ataque Vamos Botar pra Rolar.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua panchina che ha l'attacco Rotolamento Collettivo."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582957,
				tcgplayer: 253322
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582957,
				tcgplayer: 253322
			}
		},
	],
}

export default card
