import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [266],
	set: Set,

	name: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
		'es-es': "Silcoon",
		'it-it': "Silcoon",
		'pt-br': "Silcoon",
		'de-de': "Schaloko"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'es-es': "Wurmple",
		'it-it': "Wurmple",
		'pt-br': "Wurmple",
		'de-de': "Waumpel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Entangling String",
			'fr-fr': "Fil Emmêlant",
			'es-es': "Cuerda Estranguladora",
			'it-it': "Legacci Intralcianti",
			'pt-br': "Fios Emaranhadores",
			'de-de': "Einschnürender Faden"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'de-de': "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674018,
				tcgplayer: 283871
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674018,
				tcgplayer: 283871
			}
		},
	],
}

export default card
