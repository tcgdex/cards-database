import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [954],
	set: Set,

	name: {
		'en-us': "Rabsca",
		'fr-fr': "Bérasca",
		'es-es': "Rabsca",
		'it-it': "Rabsca",
		'pt-br': "Rabsca",
		'de-de': "Skarabaks"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Rellor",
		'fr-fr': "Léboulérou",
		'es-es': "Rellor",
		'it-it': "Rellor",
		'pt-br': "Rellor",
		'de-de': "Relluk"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Spherical Shield",
			'fr-fr': "Bouclier Sphérique",
			'es-es': "Escudo Esférico",
			'it-it': "Scudo Sferico",
			'pt-br': "Escudo Esférico",
			'de-de': "Kugelförmiger Schild"
		},

		effect: {
			'en-us': "Prevent all damage from and effects of attacks from your opponent's Pokémon done to your Benched Pokémon.",
			'fr-fr': "Évitez tous les dégâts et les effets d'attaques infligés à vos Pokémon de Banc par les Pokémon de votre adversaire.",
			'es-es': "Se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a tus Pokémon en Banca.",
			'it-it': "Previeni sia i danni che gli effetti degli attacchi dei Pokémon del tuo avversario inflitti ai tuoi Pokémon in panchina.",
			'pt-br': "Previna todo o dano e os efeitos de ataques dos Pokémon do seu oponente causados aos seus Pokémon no Banco.",
			'de-de': "Verhindere allen Schaden durch und alle Effekte von Attacken von Pokémon deines Gegners, die den Pokémon auf deiner Bank zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "An infant sleeps inside the ball. Rabsca rolls the ball soothingly with its legs to ensure the infant sleeps comfortably.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760654,
				tcgplayer: 542768
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760654,
				tcgplayer: 542768
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "mingo",

}

export default card