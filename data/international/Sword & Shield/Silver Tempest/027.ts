import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [655],
	set: Set,

	name: {
		'en-us': "Delphox",
		'fr-fr': "Goupelin",
		'es-es': "Delphox",
		'it-it': "Delphox",
		'pt-br': "Delphox",
		'de-de': "Fennexis"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
		'es-es': "Braixen",
		'it-it': "Braixen",
		'pt-br': "Braixen",
		'de-de': "Rutena"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flare Parade",
			'fr-fr': "Parade Flamboyante",
			'es-es': "Desfile de Antorchas",
			'it-it': "Corteo Fiammeggiante",
			'pt-br': "Desfile de Labaredas",
			'de-de': "Flammenparade"
		},

		effect: {
			'en-us': "This attack does 60 damage for each Serena card in your discard pile.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque carte Serena dans votre pile de défausse.",
			'es-es': "Este ataque hace 60 puntos de daño por cada carta de Serena en tu pila de descartes.",
			'it-it': "Questo attacco infligge 60 danni per ogni carta Serena nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada carta Serena na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jede Serena-Karte in deinem Ablagestapel 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Energy Crush",
			'fr-fr': "Écras'Énergie",
			'es-es': "Comprimir Energía",
			'it-it': "Sgretolenergia",
			'pt-br': "Esmagamento de Energia",
			'de-de': "Zermalmende Energie"
		},

		effect: {
			'en-us': "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Using psychic power, it generates a fiery vortex of 5,400 degrees Fahrenheit, incinerating foes swept into this whirl of flame.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682068,
				tcgplayer: 451658
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682068,
				tcgplayer: 451658
			}
		},
	],
}

export default card
