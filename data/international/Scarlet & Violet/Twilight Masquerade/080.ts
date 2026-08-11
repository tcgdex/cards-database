import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [63],
	set: Set,

	name: {
		'en-us': "Abra",
		'fr-fr': "Abra",
		'es-es': "Abra",
		'it-it': "Abra",
		'pt-br': "Abra",
		'de-de': "Abra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Teleporter",
			'fr-fr': "Téléporteur",
			'es-es': "Teletransportador",
			'it-it': "Teletrasportatore",
			'pt-br': "Teletransportar",
			'de-de': "Teleporter"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may shuffle it and all attached cards into your deck.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez le mélanger avec votre deck, ainsi que toutes les cartes qui lui sont attachées.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi rimischiarlo nel tuo mazzo insieme a tutte le carte a esso assegnate.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá embaralhá-lo e todas as cartas ligadas a ele no seu baralho.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du es und alle angelegten Karten in dein Deck mischen."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'es-es': "Transmisión",
			'it-it': "Raggio",
			'pt-br': "Feixe",
			'de-de': "Strahl"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
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
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon uses its psychic powers while it sleeps. The contents of Abra's dreams affect the powers that the Pokémon wields.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769254,
				tcgplayer: 550124
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769254,
				tcgplayer: 550124
			}
		},
	],

	illustrator: "Kariya",

}

export default card