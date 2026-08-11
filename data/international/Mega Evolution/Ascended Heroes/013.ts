import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Beautifly",
		'fr-fr': "Charmillon",
		'es-es': "Beautifly",
		'es-mx': "Beautifly",
		'de-de': "Papinella",
		'it-it': "Beautifly",
		'pt-br': "Beautifly"
	},

	evolveFrom: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
		'es-es': "Silcoon",
		'es-mx': "Silcoon",
		'de-de': "Schaloko",
		'it-it': "Silcoon",
		'pt-br': "Silcoon",
	},

	illustrator: "Narumi Sato",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [267],
	hp: 130,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Stun Spore",
			'fr-fr': "Para-Spore",
			'es-es': "Paralizador",
			'es-mx': "Paralizador",
			'de-de': "Stachelspore",
			'it-it': "Paralizzante",
			'pt-br': "Esporos Atordoantes"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 40
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Energy Straw",
			'fr-fr': "Trompe Énergie",
			'es-es': "Trompa Energética",
			'es-mx': "Succión Energética",
			'de-de': "Energierüssel",
			'it-it': "Energicannuccia",
			'pt-br': "Canudo de Energia"
		},

		effect: {
			'en-us': "Your opponent reveals their hand, and this attack does 80 damage for each Energy card you find there.",
			'fr-fr': "Votre adversaire montre sa main. Cette attaque inflige 80 dégâts pour chaque carte Énergie que vous y trouvez.",
			'es-es': "Tu rival enseña las cartas de su mano, y este ataque hace 80 puntos de daño por cada carta de Energía que encuentres entre ellas.",
			'es-mx': "Tu rival muestra su mano, y este ataque hace 80 puntos de daño por cada carta de Energía que encuentres en ella.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten, und diese Attacke fügt für jede Energiekarte, die du dort findest, 80 Schadenspunkte zu.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano e questo attacco infligge 80 danni per ogni carta Energia presente tra quelle carte.",
			'pt-br': "Seu oponente revela a mão dele, e este ataque causa 80 pontos de dano para cada carta de Energia que você encontrar lá."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Vibrantly patterned wings are its prominent feature. It sucks sweet flower nectar with its long mouth.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869624,
				tcgplayer: 675825
			}
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 870156,
				tcgplayer: 676862
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870155,
				tcgplayer: 677002
			}
		},
	],
}

export default card
