import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [986],
	set: Set,

	name: {
		'en-us': "Brute Bonnet",
		'fr-fr': "Fongus-Furie",
		'es-es': "Furioseta",
		'it-it': "Fungofurioso",
		'pt-br': "Capuz Bruto",
		'de-de': "Wutpilz"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Toxic Powder",
			'fr-fr': "Poudre Toxique",
			'es-es': "Polvareda Tóxica",
			'it-it': "Pulvitossina",
			'pt-br': "Pó Tóxico",
			'de-de': "Giftiger Puder"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon has an Ancient Booster Energy Capsule attached, you may make both Active Pokémon Poisoned.",
			'fr-fr': "Une fois pendant votre tour, si Capsule Énergie Booster Temps Passé est attachée à ce Pokémon, vous pouvez laisser les deux Pokémon Actifs Empoisonnés.",
			'es-es': "Una vez durante tu turno, si este Pokémon tiene un Tanque de Energía Potenciadora del Pasado unido, puedes dejar a ambos Pokémon Activos Envenenados.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon ha una Capsula energetica Tempo Passato assegnata, puoi lasciare entrambi i Pokémon attivi avvelenati.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon tiver uma Cápsula Energética de Melhoria Ancestral ligada a ele, você poderá deixar ambos os Pokémon Ativos Envenenados.",
			'de-de': "Einmal während deines Zuges, wenn an dieses Pokémon 1 Energiekapsel aus der Vergangenheit angelegt ist, kannst du beide Aktiven Pokémon vergiften."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Rampaging Hammer",
			'fr-fr': "Marteau Furieux",
			'es-es': "Martillazo Furioso",
			'it-it': "Martello Infuriato",
			'pt-br': "Martelo Furioso",
			'de-de': "Tobender Hammer"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It is possible that the creature listed as Brute Bonnet in a certain book could actually be this Pokémon.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 748125,
				tcgplayer: 523799,
				cardtrader: 265241
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740660,
				tcgplayer: 523799,
				cardtrader: 265241
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	
}

export default card
