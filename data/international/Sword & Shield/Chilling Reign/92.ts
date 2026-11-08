import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [853],
	set: Set,

	name: {
		'en-us': "Grapploct",
		'fr-fr': "Krakos",
		'es-es': "Grapploct",
		'it-it': "Grapploct",
		'pt-br': "Grapploct",
		'de-de': "Kaocto"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Stranglehold Master",
			'fr-fr': "Emprise Magistrale",
			'es-es': "Maestro del Estrangulamiento",
			'it-it': "Morsa da Maestro",
			'pt-br': "Mata-leão de Mestre",
			'de-de': "Meister des Klammergriffs"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de ColorlessColorless.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, el Coste de Retirada del Pokémon Activo de tu rival es de ColorlessColorless más.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il costo di ritirata del Pokémon attivo del tuo avversario aumenta di Colorless Colorless.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, o custo de Recuo do Pokémon Ativo do seu oponente será ColorlessColorless a mais.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Rückzugskosten des Aktiven Pokémon deines Gegners um ColorlessColorless."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Synchro Buster",
			'fr-fr': "Buster Synchro",
			'es-es': "Sincrodestrucción",
			'it-it': "Sincrodistruzione",
			'pt-br': "Aniquilação Sincronizada",
			'de-de': "Synchronknacker"
		},

		effect: {
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Searching for an opponent to test its skills against, it emerges onto land. Once the battle is over, it returns to the sea."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567200,
				tcgplayer: 241761
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567200,
				tcgplayer: 241761
			}
		},
	],
}

export default card
