import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		'fr-fr': "Nosferapti",
		'en-us': "Zubat",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Écho Révélateur",
			'en-us': "Revealing Echo",
			'es-es': "Eco Revelador",
			'it-it': "Svelaeco",
			'pt-br': "Eco Revelador",
			'de-de': "Aufdeckendes Echo"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez demander à votre adversaire de montrer sa main.",
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may have your opponent reveal their hand.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes hacer que tu rival enseñe las cartas de su mano.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi far mostrare al tuo avversario le carte che ha in mano.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá fazer com que o seu oponente revele a mão dele.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Zubat live in caves, down where the sun's light won't reach. In the morning, they gather together to keep each other warm as they sleep.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733636,
				tcgplayer: 516150,
				cardtrader: 261160
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733636,
				tcgplayer: 516150,
				cardtrader: 261160
			}
		},
	],

	illustrator: "Scav",

	
}

export default card
