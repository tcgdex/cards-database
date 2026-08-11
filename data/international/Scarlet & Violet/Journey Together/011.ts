import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [591],
	set: Set,

	name: {
		'en-us': "Amoonguss ex",
		'fr-fr': "Gaulet-ex",
		'es-es': "Amoonguss ex",
		'de-de': "Hutsassa-ex",
		'it-it': "Amoonguss-ex",
		'pt-br': "Amoonguss ex",
		'es-mx': "Amoonguss ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'es-es': "Foongus",
		'de-de': "Tarnpignon",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'es-mx': "Foongus"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Spore Ball",
			'fr-fr': "Boule de Spores",
			'es-es': "Bola Espora",
			'de-de': "Sporenbällchen",
			'it-it': "Pallaspore",
			'pt-br': "Bola de Esporos",
			'es-mx': "Bola Esporífera"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Champignon's Swing",
			'fr-fr': "Frappe Champignon",
			'es-es': "Golpe Champiñón",
			'de-de': "Champignonschwinger",
			'it-it': "Colpo Champignon",
			'pt-br': "Balanço do Champignon",
			'es-mx': "Champigolpe"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 80 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817163,
				tcgplayer: 623438
			}
		},
	],
}

export default card
