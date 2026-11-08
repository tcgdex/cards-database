import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [1018],
	set: Set,

	name: {
		'en-us': "Archaludon",
		'fr-fr': "Pondralugon",
		'es-es': "Archaludon",
		'pt-br': "Archaludon",
		'it-it': "Archaludon",
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
		'pt-br': "Duraludon",
		'it-it': "Duraludon",
		'de-de': "Duraludon"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Metal Bridge",
			'fr-fr': "Pont Métal",
			'es-es': "Puente Metálico",
			'pt-br': "Ponte Metálica",
			'it-it': "Metalponte",
			'de-de': "Metallbrücke"
		},

		effect: {
			'en-us': "All of your Pokémon that have {M} Energy attached have no Retreat Cost.",
			'fr-fr': "Vos Pokémon auxquels de l'Énergie {M} est attachée n'ont pas de Coût de Retraite.",
			'es-es': "Ninguno de tus Pokémon que tenga alguna Energía {M} unida tiene Coste de Retirada.",
			'pt-br': "Todos os seus Pokémon que têm Energia {M} ligada a eles não têm custo de Recuo.",
			'it-it': "Tutti i tuoi Pokémon che hanno delle Energie {M} assegnate non hanno costo di ritirata.",
			'de-de': "Alle deine Pokémon, an die {M}-Energie angelegt ist, haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Iron Blaster",
			'fr-fr': "Explose-Fer",
			'es-es': "Explosión Férrea",
			'pt-br': "Detonador de Ferro",
			'it-it': "Esplodiferro",
			'de-de': "Eisenblaster"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
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

	illustrator: "Oswaldo KATO",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805459,
				tcgplayer: 610425
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805459,
				tcgplayer: 610425
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806508,
				tcgplayer: 610587
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806509,
				tcgplayer: 610688
			}
		},
	],
}

export default card
