import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'es-es': "Fraxure",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'de-de': "Sharfax"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		611,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'es-es': "Axew",
		'it-it': "Axew",
		'pt-br': "Axew",
		'de-de': "Milza"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc Aiguisé",
				'es-es': "Colmillo Afilado",
				'it-it': "Zannaffilata",
				'pt-br': "Presa Afiada",
				'de-de': "Scharfe Fänge"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Slayer",
				'fr-fr': "Dragon Slayer",
				'es-es': "Abatedragones",
				'it-it': "Abbattidraghi",
				'pt-br': "Exterminador de Dragões",
				'de-de': "Drachentöter"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Dragon Pokémon, this attack does 40 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Dragon, cette attaque inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Dragon, este ataque hace 40 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Dragon, questo attacco infligge 40 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Dragon, este ataque causará 40 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Dragon-Pokémon ist, fügt dieser Angriff 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A broken tusk will not grow back, so it diligently sharpens its tusks on river rocks after the end of a battle.",
	},

	thirdParty: {
		cardmarket: 286356,
		tcgplayer: 107229
	}
}

export default card
