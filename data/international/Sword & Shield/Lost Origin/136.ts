import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [706],
	set: Set,

	name: {
		'en-us': "Hisuian Goodra VSTAR",
		'fr-fr': "Muplodocus de Hisui VSTAR",
		'es-es': "Goodra de Hisui V-ASTRO",
		'it-it': "Goodra di Hisui V ASTRO",
		'pt-br': "Goodra de Hisui V-ASTRO",
		'de-de': "Hisui Viscogon-VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Hisuian Goodra V",
		'fr-fr': "Muplodocus de Hisui-V",
		'es-es': "Goodra de Hisui V",
		'it-it': "Goodra di Hisui-V",
		'pt-br': "Goodra de Hisui V",
		'de-de': "Hisui-Viscogon-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Metal", "Colorless"],

		name: {
			'en-us': "Rolling Iron",
			'fr-fr': "Fer Roulant",
			'es-es': "Giro Férreo",
			'it-it': "Ferro Rotolante",
			'pt-br': "Ferrolante",
			'de-de': "Rollendes Eisen"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 80 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 80 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 80 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 80 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 80 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 80 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670818,
				tcgplayer: 284059
			}
		},
	],
}

export default card
