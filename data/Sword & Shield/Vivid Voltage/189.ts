import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Monthracite VMAX",
		en: "Coalossal VMAX",
		es: "Coalossal VMAX",
		it: "Coalossal VMAX",
		pt: "Coalossal VMAX",
		de: "Montecarbo VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Monthracite-V",
		en: "Coalossal V",
		es: "Coalossal V",
		it: "Coalossal-V",
		pt: "Coalossal V",
		de: "Montecarbo-V"
	},

	attacks: [{
		name: {
			fr: "Tir Éruptif",
			en: "Eruption Shot",
			es: "Disparo Erupción",
			it: "Colpo Eruzione",
			pt: "Disparo Vulcânico",
			de: "Eruptionsgeschoss"
		},

		effect: {
			fr: "Défaussez la carte du dessus de votre deck. Si cette carte est une Énergie, cette attaque inflige 90 dégâts supplémentaires et vous attachez cette carte-là à ce Pokémon.",
			en: "Discard the top card of your deck. If that card is an Energy card, this attack does 90 more damage, and attach that card to this Pokémon.",
			es: "Descarta la primera carta de tu baraja. Si es una carta de Energía, este ataque hace 90 puntos de daño más, y unes esa carta a este Pokémon.",
			it: "Scarta la prima carta del tuo mazzo. Se quella carta è una carta Energia, questo attacco infligge 90 danni in più, poi assegnala a questo Pokémon.",
			pt: "Descarte a carta de cima do seu baralho. Se aquela carta for uma carta de Energia, este ataque causará 90 pontos de dano a mais, e ligue aquela carta a este Pokémon.",
			de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Wenn jene Karte eine Energiekarte ist, lege sie an dieses Pokémon an, und diese Attacke fügt 90 Schadenspunkte mehr zu."
		},

		damage: "40+",
		cost: ["Fighting"]
	}, {
		name: {
			fr: "Rocher G-Max",
			en: "G-Max Boulder",
			es: "Gigarroca",
			it: "Gigamacigno",
			pt: "Rocha G-Max",
			de: "Giga-Felsbrocken"
		},

		damage: 240,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX"
}

export default card