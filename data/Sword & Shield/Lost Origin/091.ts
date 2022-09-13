import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
		es: "Rhyperior",
		it: "Rhyperior",
		pt: "Rhyperior",
		de: "Rihornior"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Geo Cannon",
			fr: "Géo-Canon",
			es: "Geocañón",
			it: "Geocannone",
			pt: "Geocanhão",
			de: "Geo-Kanone"
		},

		effect: {
			en: "Discard the top card of your deck. If that card is an Energy card, this attack does 100 more damage, and attach that card to this Pokémon.",
			fr: "Défaussez la carte du dessus de votre deck. Si cette carte est une carte Énergie, cette attaque inflige 100 dégâts supplémentaires et vous attachez cette carte-là à ce Pokémon.",
			es: "Descarta la primera carta de tu baraja. Si es una carta de Energía, este ataque hace 100 puntos de daño más, y unes esa carta a este Pokémon.",
			it: "Scarta la prima carta del tuo mazzo. Se quella carta è una carta Energia, questo attacco infligge 100 danni in più, poi assegnala a questo Pokémon.",
			pt: "Descarte a carta de cima do seu baralho. Se aquela carta for uma carta de Energia, este ataque causará 100 pontos de dano a mais, e ligue aquela carta a este Pokémon.",
			de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Wenn jene Karte eine Energiekarte ist, fügt diese Attacke 100 Schadenspunkte mehr zu, und du legst jene Karte an dieses Pokémon an."
		},

		damage: "50+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rocky Tackle",
			fr: "Tacle Rocailleux",
			es: "Placaje Rocoso",
			it: "Azione Rocciosa",
			pt: "Investida Pedregosa",
			de: "Steiniger Tackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card