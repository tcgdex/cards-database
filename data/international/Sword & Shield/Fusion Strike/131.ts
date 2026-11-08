import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [27],
	set: Set,

	name: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
		'es-es': "Sandshrew",
		'it-it': "Sandshrew",
		'pt-br': "Sandshrew",
		'de-de': "Sandan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuka Morii",

	description: {
		'en-us': "When its skin gets wrinkled from moisture, it heads for a volcano. It lies flat on a spot with a lot of geothermal heat and dries itself out."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Dig It Up",
			'fr-fr': "Dénicher",
			'de-de': "Buddeln",
			'es-es': "Socavar",
			'pt-br': "Desaterrar",
			'it-it': "Rinvenimento"
		},

		effect: {
			'en-us': "Look at the top card of your deck. You may discard that card.",
			'fr-fr': "Regardez la carte du dessus de votre deck. Vous pouvez défausser cette carte-là.",
			'de-de': "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte auf deinen Ablagestapel legen.",
			'es-es': "Mira la primera carta de tu baraja. Puedes descartar esa carta.",
			'pt-br': "Olhe a carta de cima do seu baralho. Você pode descartar aquela carta.",
			'it-it': "Guarda la prima carta del tuo mazzo. Puoi scartare quella carta."
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
				cardmarket: 582709,
				tcgplayer: 253330
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582709,
				tcgplayer: 253330
			}
		},
	],
}

export default card
