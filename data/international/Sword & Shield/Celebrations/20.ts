import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'es-es': "Dialga",
		'it-it': "Dialga",
		'pt-br': "Dialga",
		'de-de': "Dialga"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			'en-us': "Temporal Backflow",
			'fr-fr': "Reflux Temporel",
			'es-es': "Regresión Temporal",
			'it-it': "Riflusso Temporale",
			'pt-br': "Reversão Temporal",
			'de-de': "Zeitlicher Rückfluss"
		},

		effect: {
			'en-us': "Put a card from your discard pile into your hand.",
			'fr-fr': "Ajoutez à votre main une carte de votre pile de défausse.",
			'es-es': "Pon 1 carta de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
			'pt-br': "Coloque 1 carta da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand."
		},

		cost: ["Metal"]
	}, {
		name: {
			'en-us': "Metal Blast",
			'fr-fr': "Explosion Métallique",
			'es-es': "Explosión Metálica",
			'it-it': "Metalbomba",
			'pt-br': "Explosão de Metal",
			'de-de': "Metallexplosion"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Metal Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Metal unida a este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Metal assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia Metal ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Metal-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	description: {
		'en-us': "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity."
	},

	dexId: [483],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576765,
				tcgplayer: 250296
			}
		},
	],
}

export default card
