import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [28],
	set: Set,

	name: {
		'fr-fr': "Sablaireau",
		'en-us': "Sandslash",
		'es-es': "Sandslash",
		'it-it': "Sandslash",
		'pt-br': "Sandslash",
		'de-de': "Sandamer"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Sabelette",
		'en-us': "Sandshrew",
		'es-es': "Sandshrew",
		'it-it': "Sandshrew",
		'pt-br': "Sandshrew",
		'de-de': "Sandan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Bagarre",
			'en-us': "Rumble",
			'es-es': "Retumbar",
			'it-it': "Rombo",
			'pt-br': "Estrondo",
			'de-de': "Grollen"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Pointe Déchirante",
			'en-us': "Spike Rend",
			'es-es': "Púas Desgarradoras",
			'it-it': "Fendilancia",
			'pt-br': "Espinho Despedaçador",
			'de-de': "Zerreißende Dornen"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 100 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It climbs trees by hooking on with its sharp claws. Sandslash shares the berries it gathers, dropping them down to Sandshrew waiting below the tree.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733623,
				tcgplayer: 515989,
				cardtrader: 261214
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733623,
				tcgplayer: 515989,
				cardtrader: 261214
			}
		},
	],

	illustrator: "kodama",

	
}

export default card
