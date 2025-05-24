import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira",
		pt: "Chansey"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scrunch",
				fr: "Compresse",
				de: "Zähneknirschen",
				pt: "Comprimir"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Chansey during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Leveinard pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				de: "Wirf eine Münze. Bei \"Kopf\" kannst Du den Schaden, der Chaneira während des nächsten Zuges zugefügt wird, verhindern. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)",
				pt: "Jogue uma moeda. Se sair cara, prevenir todo dano causado a Chansey durante o próximo turno do seu oponente. (Qualquer outro efeito ou ataque ainda acontece.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Austeiler",
				pt: "Giro de Vidas"
			},
			effect: {
				en: "Chansey does 80 damage to itself.",
				fr: "Leveinard s'inflige 80 points de dégâts.",
				de: "Chaneira fügt sich selbst 80 Schadenspunkte zu.",
				pt: "Chansey faz 80 de dano a si mesmo."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Un Pokémon rare et difficile à capturer qui porte chance et bien-être à son possesseur.",
		pt: "Um Pokémon raro e difícil de capturar que leva sorte e bem-estar ao seu dono.",
		en: "A rare Pokémon that carries luck and well-being to its owner."
	}
}

export default card
