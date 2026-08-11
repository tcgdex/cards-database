import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [242],
	set: Set,

	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'es-es': "Blissey",
		'it-it': "Blissey",
		'pt-br': "Blissey",
		'de-de': "Heiteira"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Mizue",

	description: {
		'en-us': "This Pokémon is overflowing with love. Only Chansey that share a strong bond with their Trainer can evolve, so people say."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Expert in Roundness",
			'fr-fr': "Expert en Rondeur",
			'de-de': "Rundheitsexperte",
			'es-es': "As del Rodamiento",
			'pt-br': "Mestre em Redondice",
			'it-it': "Specialista di Rotondità"
		},

		effect: {
			'en-us': "Prevent all damage done to each of your Pokémon that has the Let's All Rollout attack by attacks from your opponent's Pokémon VMAX.",
			'fr-fr': "Évitez tous les dégâts infligés à chacun de vos Pokémon ayant l'attaque Roulade Collégiale par les attaques des Pokémon-VMAX de votre adversaire.",
			'de-de': "Verhindere allen Schaden durch Attacken von Pokémon-VMAX deines Gegners, der jedem deiner Pokémon zugefügt wird, das die Attacke Gemeinsamer Walzer hat.",
			'es-es': "Evita todo el daño infligido a cada uno de tus Pokémon que tenga el ataque Todos a Rodar por ataques de los Pokémon VMAX de tu rival.",
			'pt-br': "Previna todo o dano causado a cada um dos seus Pokémon que tiver o ataque Vamos Botar pra Rolar por ataques dos Pokémon VMAX do seu oponente.",
			'it-it': "Previeni tutti i danni inflitti ai tuoi Pokémon che hanno l'attacco Rotolamento Collettivo dagli attacchi dei Pokémon-VMAX del tuo avversario."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

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
				cardmarket: 582878,
				tcgplayer: 253297
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582878,
				tcgplayer: 253297
			}
		},
	],
}

export default card
