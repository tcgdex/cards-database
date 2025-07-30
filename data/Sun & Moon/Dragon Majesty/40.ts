import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
		es: "Altaria",
		it: "Altaria",
		pt: "Altaria",
		de: "Altaria"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fight Song",
				fr: "Hymne au Combat",
				es: "Canción Bélica",
				it: "Fanfara",
				pt: "Canção de Combate",
				de: "Angriffsarie"
			},
			effect: {
				en: "Your Dragon Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon Dragon infligent 20 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Pokémon Dragon hacen 20 puntos de daño más a los Pokémon Activos (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi dei tuoi Pokémon Dragon infliggono 20 danni in più al Pokémon attivo, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques do seu Pokémon Dragon causam 20 de danos adicionais ao Pokémon Ativo (antes da aplicação de Fraqueza e Resistência).",
				de: "Die Angriffe deiner Dragon-Pokémon fügen den Aktiven Pokémon 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
				es: "Perforar",
				it: "Perforare",
				pt: "Perfurar",
				de: "Durchbohren"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 363511,
		tcgplayer: 175459
	}
}

export default card
