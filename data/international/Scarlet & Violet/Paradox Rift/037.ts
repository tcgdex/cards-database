import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [361],
	set: Set,

	name: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Ice Shard",
			'fr-fr': "Éclats Glace",
			'es-es': "Esquirla Helada",
			'it-it': "Geloscheggia",
			'pt-br': "Caco de Gelo",
			'de-de': "Eissplitter"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a {F} Pokémon, this attack does 30 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon {F}, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon {F}, este ataque hace 30 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon {F}, questo attacco infligge 30 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {F}, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein {F}-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It is said that several Snorunt gather under giant leaves and live together in harmony.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740513,
				tcgplayer: 523646,
				cardtrader: 265172
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 785465
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740513,
				tcgplayer: 523646,
				cardtrader: 265172
			}
		},
	],

	illustrator: "satoma",

	
}

export default card
