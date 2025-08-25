import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Coalossal VMAX",
		fr: "Monthracite VMAX",
		es: "Coalossal VMAX",
		it: "Coalossal VMAX",
		pt: "Coalossal VMAX",
		de: "Montecarbo VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [839],
	set: Set,
	hp: 330,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Coalossal V",
		fr: "Monthracite-V",
		es: "Coalossal V",
		it: "Coalossal-V",
		pt: "Coalossal V",
		de: "Montecarbo-V"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Eruption Shot",
				fr: "Tir Éruptif",
				es: "Disparo Erupción",
				it: "Colpo Eruzione",
				pt: "Disparo Vulcânico",
				de: "Eruptionsgeschoss"
			},
			effect: {
				en: "Discard the top card of your deck. If that card is an Energy card, this attack does 90 more damage, and attach that card to this Pokémon.",
				fr: "Défaussez la carte du dessus de votre deck. Si cette carte est une Énergie, cette attaque inflige 90 dégâts supplémentaires et vous attachez cette carte-là à ce Pokémon.",
				es: "Descarta la primera carta de tu baraja. Si es una carta de Energía, este ataque hace 90 puntos de daño más, y unes esa carta a este Pokémon.",
				it: "Scarta la prima carta del tuo mazzo. Se quella carta è una carta Energia, questo attacco infligge 90 danni in più, poi assegnala a questo Pokémon.",
				pt: "Descarte a carta de cima do seu baralho. Se aquela carta for uma carta de Energia, este ataque causará 90 pontos de dano a mais, e ligue aquela carta a este Pokémon.",
				de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Wenn jene Karte eine Energiekarte ist, lege sie an dieses Pokémon an, und diese Attacke fügt 90 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "G-Max Boulder",
				fr: "Rocher G-Max",
				es: "Gigarroca",
				it: "Gigamacigno",
				pt: "Rocha G-Max",
				de: "Giga-Felsbrocken"
			},

			damage: 240,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 511915,
		tcgplayer: 226551
	}
}

export default card
