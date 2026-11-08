import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		'en-us': "Metagross V",
		'fr-fr': "Métalosse V",
		'es-es': "Metagross V",
		'it-it': "Metagross V",
		'pt-br': "Metagross V",
		'de-de': "Metagross V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Bullet Punch",
			'fr-fr': "Pisto-Poing",
			'es-es': "Puño Bala",
			'it-it': "Pugnoscarica",
			'pt-br': "Soco Projétil",
			'de-de': "Patronenhieb"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "20+",
		cost: ["Metal"]
	}, {
		name: {
			'en-us': "Synchro Hammer",
			'fr-fr': "Marteau Synchro",
			'es-es': "Sincromartillo",
			'it-it': "Sincromartello",
			'pt-br': "Martelada Sincronizada",
			'de-de': "Synchronhammer"
		},

		effect: {
			'en-us': "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached, this attack does 90 more damage.",
			'fr-fr': "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d'Énergies attachées, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas a ellos, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon genauso viel Energie angelegt ist wie an das Aktive Pokémon deines Gegners, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567220,
				tcgplayer: 241787
			}
		},
	],
}

export default card
