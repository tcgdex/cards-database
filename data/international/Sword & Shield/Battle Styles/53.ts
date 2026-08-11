import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		'en-us': "Boltund",
		'fr-fr': "Fulgudog",
		'es-es': "Boltund",
		'it-it': "Boltund",
		'pt-br': "Boltund",
		'de-de': "Bellektro"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Yamper",
		'fr-fr': "Voltoutou",
		'es-es': "Yamper",
		'it-it': "Yamper",
		'pt-br': "Yamper",
		'de-de': "Voldi"
	},

	attacks: [{
		name: {
			'en-us': "Corner",
			'fr-fr': "Coinçage",
			'es-es': "Arrinconar",
			'it-it': "Trappola",
			'pt-br': "Quina",
			'de-de': "Bedrängen"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Defiant Spark",
			'fr-fr': "Étincelle Rebelle",
			'es-es': "Chispa Desafiante",
			'it-it': "Scintilla Ribelle",
			'pt-br': "Fagulha Desafiadora",
			'de-de': "Trotzfunke"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack can be used for Lightning.",
			'fr-fr': "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque peut être utilisée pour Lightning.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por 1 Energía Lightning.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, il costo di questo attacco è Lightning.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque poderá ser usado por Lightning.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, kann diese Attacke für Lightning eingesetzt werden."
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It sends electricity through its legs to boost their strength. Running at top speed, it easily breaks 50 mph."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545376,
				tcgplayer: 234211
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545376,
				tcgplayer: 234211
			}
		},
	],
}

export default card
