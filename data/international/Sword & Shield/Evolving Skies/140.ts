import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage2",
	illustrator: "Tika Matsuno",

	attacks: [{
		name: {
			'en-us': "Clutch",
			'fr-fr': "Serre",
			'es-es': "Embrague",
			'it-it': "Grinfie",
			'pt-br': "Clutch",
			'de-de': "Greifer"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Nitro Dive",
			'fr-fr': "Plongée Nitrée",
			'es-es': "Nitropicado",
			'it-it': "Picchiata Nitrica",
			'pt-br': "Nitro Dive",
			'de-de': "Nitro-Sturzflug"
		},

		effect: {
			'en-us': "If this Pokémon has any Fire Energy attached, this attack does 80 more damage.",
			'fr-fr': "Si de l'Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 80 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 80 danni in più.",
			'pt-br': "If this Pokémon has any Fire Energy attached, this attack does 80 more damage.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	dexId: [663],

	evolveFrom: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	description: {
		'en-us': "Bird Pokémon make up most of its diet. It approaches at high speeds and smacks them down to the ground with its powerful kick."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574198,
				tcgplayer: 246885
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574198,
				tcgplayer: 246885
			}
		},
	],
}

export default card
