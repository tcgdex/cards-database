import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Fraxure",
		fr: "Incisache",
		es: "Fraxure",
		it: "Fraxure",
		pt: "Fraxure",
		de: "Sharfax"
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
		en: "Axew",
		fr: "Coupenotte",
		es: "Axew",
		it: "Axew",
		pt: "Axew",
		de: "Milza"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
				es: "Colmillo Afilado",
				it: "Zannaffilata",
				pt: "Presa Afiada",
				de: "Scharfe Fänge"
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
				en: "Dragon Slayer",
				fr: "Dragon Slayer",
				es: "Abatedragones",
				it: "Abbattidraghi",
				pt: "Exterminador de Dragões",
				de: "Drachentöter"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Dragon Pokémon, this attack does 40 more damage (before applying Weakness and Resistance).",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Dragon, cette attaque inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Dragon, este ataque hace 40 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Se il Pokémon attivo del tuo avversario è di tipo Dragon, questo attacco infligge 40 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Dragon, este ataque causará 40 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Wenn das Aktive Pokémon deines Gegners ein Dragon-Pokémon ist, fügt dieser Angriff 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
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

	thirdParty: {
		cardmarket: 286356,
		tcgplayer: 107229
	}
}

export default card
