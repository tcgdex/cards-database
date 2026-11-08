import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		'fr-fr': "Fulgudog",
		'en-us': "Boltund",
		'es-es': "Boltund",
		'it-it': "Boltund",
		'pt-br': "Boltund",
		'de-de': "Bellektro"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Voltoutou",
		'en-us': "Yamper"
	},

	attacks: [{
		name: {
			'fr-fr': "Grosse Morsure",
			'en-us': "Big Bite",
			'es-es': "Gran Mordisco",
			'it-it': "Grande Morso",
			'pt-br': "Mordidona",
			'de-de': "Mächtiger Biss"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Crocs Combatifs",
			'en-us': "Fighting Fangs",
			'es-es': "Colmillos Luchadores",
			'it-it': "Zanne Combattenti",
			'pt-br': "Caninos de Luta",
			'de-de': "Kämpfende Reißzähne"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V ou un Pokémon-GX, cette attaque inflige 90 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 90 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V o un Pokémon-GX, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V o un Pokémon-GX, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon V ou um Pokémon-GX, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V oder Pokémon-GX ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "This Pokémon generates electricity and channels it into its legs to keep them going strong. Boltund can run nonstop for three full days."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539588,
				tcgplayer: 232397
			}
		},
	],
}

export default card
