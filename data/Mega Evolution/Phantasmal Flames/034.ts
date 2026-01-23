import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmot",
		fr: "Pohmarmotte",
		es: "Pawmot",
		'es-mx': "Pawmot",
		de: "Pamomamo",
		it: "Pawmot",
		pt: "Pawmot"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage2",
	dexId: [923],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Voltaic Fist",
			fr: "Poing Voltaïque",
			es: "Puño Voltaico",
			'es-mx': "Puño Voltaico",
			de: "Voltaische Faust",
			it: "Pugnovolt",
			pt: "Punho Voltaico"
		},

		effect: {
			en: "You may have this Pokémon also do 60 damage to itself and make your opponent's Active Pokémon Paralyzed.",
			fr: "Ce Pokémon peut s'infliger aussi 60 dégâts et rendre le Pokémon Actif de votre adversaire Paralysé.",
			es: "Puedes hacer que este Pokémon también se haga 60 puntos de daño a sí mismo y dejar al Pokémon Activo de tu rival Paralizado.",
			'es-mx': "Puedes hacer que este Pokémon también se haga 60 puntos de daño a sí mismo y dejar Paralizado al Pokémon Activo de tu rival.",
			de: "Du kannst dieses Pokémon dazu veranlassen, auch sich selbst 60 Schadenspunkte zuzufügen und das Aktive Pokémon deines Gegners zu paralysieren.",
			it: "Puoi far infliggere a questo Pokémon anche 60 danni a se stesso e lasciare il Pokémon attivo del tuo avversario paralizzato.",
			pt: "Você pode fazer este Pokémon também causar 60 pontos de dano a si mesmo e deixar o Pokémon Ativo do seu oponente Paralisado."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857609
	}
}

export default card