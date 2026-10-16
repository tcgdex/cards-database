import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Lurantis",
		fr: "Floramantis",
		es: "Lurantis",
		it: "Lurantis",
		pt: "Lurantis",
		de: "Mantidea"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		754,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis",
		de: "Imantis"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sunny Day",
				fr: "Zénith",
				es: "DÃ­a soleado",
				it: "Giornodisole",
				pt: "Sunny Day",
				de: "Sonnentag"
			},
			effect: {
				en: "The attacks of your Grass Pokémon and Fire Pokémon do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon Grass et de vos Pokémon Fire infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Pokémon Grass y Pokémon Fire hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi dei tuoi Pokémon Grass e dei tuoi Pokémon Fire infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques dos seus Pokémon Grass e Pokémon Fire causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Die Attacken deiner {G}-Pokémon und {R}-Pokémon fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		en: "It requires a lot of effort to maintain Lurantis's vivid coloring, but some collectors enjoy this work and treat it as their hobby.",
		de: "Es erfordert viel Arbeit, seine Farbenpracht zu erhalten, doch zum Glück gibt es Passionierte, die den hohen Aufwand nicht scheuen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297863,
				tcgplayer: 133829
			}
		}
	],
}

export default card
