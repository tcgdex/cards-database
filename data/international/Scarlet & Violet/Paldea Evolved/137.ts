import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [336],
	set: Set,

	name: {
		'fr-fr': "Séviper",
		'en-us': "Seviper",
		'es-es': "Seviper",
		'it-it': "Seviper",
		'pt-br': "Seviper",
		'de-de': "Vipitis"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Croc Aiguisé",
			'en-us': "Sharp Fang",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Coupe Transversale",
			'en-us': "Cross-Cut",
			'es-es': "Atajar",
			'it-it': "Fendente Incrociato",
			'pt-br': "Corte em Cruz",
			'de-de': "Überkreuzzerschneider"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 50 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 50 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715612,
				tcgplayer: 497635,
				cardtrader: 248794
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715612,
				tcgplayer: 497635,
				cardtrader: 248794
			}
		},
	],

	illustrator: "Nisota Niso",

	description: {
		'en-us': "It sharpens its swordlike tail on hard rocks. It hides in tall grass and strikes unwary prey with venomous fangs.",
	},
}

export default card
