import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pawmot",
		'fr-fr': "Pohmarmotte",
		'es-es': "Pawmot",
		'es-mx': "Pawmot",
		'de-de': "Pamomamo",
		'it-it': "Pawmot",
		'pt-br': "Pawmot"
	},

	evolveFrom: {
		'en-us': "Pawmo",
		'fr-fr': "Pohmotte",
		'es-es': "Pawmo",
		'es-mx': "Pawmo",
		'de-de': "Pamamo",
		'it-it': "Pawmo",
		'pt-br': "Pawmo",
	},

	rarity: "Rare",
	category: "Pokemon",

	dexId: [923],
	hp: 140,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Voltaic Fist",
			'fr-fr': "Poing Voltaïque",
			'es-es': "Puño Voltaico",
			'es-mx': "Puño Voltaico",
			'de-de': "Voltaische Faust",
			'it-it': "Pugnovolt",
			'pt-br': "Punho Voltaico"
		},

		effect: {
			'en-us': "You may have this Pokémon also do 60 damage to itself and make your opponent's Active Pokémon Paralyzed.",
			'fr-fr': "Ce Pokémon peut s'infliger aussi 60 dégâts et rendre le Pokémon Actif de votre adversaire Paralysé.",
			'es-es': "Puedes hacer que este Pokémon también se haga 60 puntos de daño a sí mismo y dejar al Pokémon Activo de tu rival Paralizado.",
			'es-mx': "Puedes hacer que este Pokémon también se haga 60 puntos de daño a sí mismo y dejar Paralizado al Pokémon Activo de tu rival.",
			'de-de': "Du kannst dieses Pokémon dazu veranlassen, auch sich selbst 60 Schadenspunkte zuzufügen und das Aktive Pokémon deines Gegners zu paralysieren.",
			'it-it': "Puoi far infliggere a questo Pokémon anche 60 danni a se stesso e lasciare il Pokémon attivo del tuo avversario paralizzato.",
			'pt-br': "Você pode fazer este Pokémon também causar 60 pontos de dano a si mesmo e deixar o Pokémon Ativo do seu oponente Paralisado."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements.",
	},

	illustrator: "satoma",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857609,
				tcgplayer: 662212,
				cardtrader: 356817
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857609,
				tcgplayer: 662212,
				cardtrader: 356817
			}
		},
	],	
}

export default card
