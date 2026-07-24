import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Oshawott",
		fr: "Moustillon",
		de: "Ottaro",
		it: "Oshawott",
		pt: "Oshawott",
		es: "Oshawott",
		'es-mx': "Oshawott"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [501],

	attacks: [{
		cost: ["Water", "Colorless"],

			name: {
				en: "Razor Shell",
				fr: "Coquilame",
				es: "Concha Filo",
				it: "Conchilama",
				pt: "Concha Navalha",
				de: "Kalkklinge"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "j",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886620,
				tcgplayer: 699875
			}
		},
	],
}

export default card
