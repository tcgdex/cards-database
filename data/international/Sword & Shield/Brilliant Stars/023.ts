import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [324],
	set: Set,

	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'es-es': "Torkoal",
		'it-it': "Torkoal",
		'pt-br': "Torkoal",
		'de-de': "Qurtel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Firebreathing",
			'fr-fr': "Souffle-Feu",
			'es-es': "Aliento de Fuego",
			'it-it': "Fuocospiro",
			'pt-br': "Hálito de Fogo",
			'de-de': "Feuerhauch"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Guard Press",
			'fr-fr': "Pression de Garde",
			'es-es': "Presión de Guardia",
			'it-it': "Pressadifesa",
			'pt-br': "Aperto Protetor",
			'de-de': "Schutzdruck"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It burns coal inside its shell for energy. It blows out black soot if it is endangered.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608473,
				tcgplayer: 263716
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608473,
				tcgplayer: 263716
			}
		},
	],
}

export default card
