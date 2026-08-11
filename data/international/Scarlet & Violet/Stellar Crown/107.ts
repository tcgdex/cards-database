import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [1018],
	set: Set,

	name: {
		'en-us': "Archaludon",
		'fr-fr': "Pondralugon",
		'es-es': "Archaludon",
		'it-it': "Archaludon",
		'pt-br': "Archaludon",
		'de-de': "Briduradon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Duraludon",
		'fr-fr': "Duralugon",
		'es-es': "Duraludon",
		'it-it': "Duraludon",
		'pt-br': "Duraludon",
		'de-de': "Duraludon"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Metal Bridge",
			'fr-fr': "Pont Métal",
			'es-es': "Puente Metálico",
			'it-it': "Metalponte",
			'pt-br': "Ponte Metálica",
			'de-de': "Metallbrücke"
		},

		effect: {
			'en-us': "All of your Pokémon that have {M} Energy attached have no Retreat Cost.",
			'fr-fr': "Vos Pokémon auxquels de l'Énergie {M} est attachée n'ont pas de Coût de Retraite.",
			'es-es': "Ninguno de tus Pokémon que tenga alguna Energía {M} unida tiene Coste de Retirada.",
			'it-it': "Tutti i tuoi Pokémon che hanno delle Energie {M} assegnate non hanno costo di ritirata.",
			'pt-br': "Todos os seus Pokémon que têm Energia {M} ligada a eles não têm custo de Recuo.",
			'de-de': "Alle deine Pokémon, an die {M}-Energie angelegt ist, haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Iron Blaster",
			'fr-fr': "Explose-Fer",
			'es-es': "Explosión Férrea",
			'it-it': "Esplodiferro",
			'pt-br': "Detonador de Ferro",
			'de-de': "Eisenblaster"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785961,
				tcgplayer: 567333
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785961,
				tcgplayer: 567333
			}
		},
		{
			type: "holo",
			stamp: ["gamestop"],
			thirdParty: {
				cardmarket: 786544,
			}
		},
		{
			type: "holo",
			stamp: ["eb-games"],
			thirdParty: {
				cardmarket: 786546,
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 789015,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 814544,
			}
		},
		{
			type: "normal",
			foil: "league",
			thirdParty: {
				cardmarket: 883682,
			}
		},
	],

	illustrator: "Oswaldo KATO",

}

export default card
