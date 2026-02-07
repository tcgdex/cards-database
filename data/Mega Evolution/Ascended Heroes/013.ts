import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [267],

	name: {
		en: "Beautifly",
		fr: "Charmillon",
		es: "Beautifly",
		'es-mx': "Beautifly",
		de: "Papinella",
		it: "Beautifly",
		pt: "Beautifly"
	},

	illustrator: "Narumi Sato",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Stun Spore",
			fr: "Para-Spore",
			es: "Paralizador",
			'es-mx': "Paralizador",
			de: "Stachelspore",
			it: "Paralizzante",
			pt: "Esporos Atordoantes"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 40
	}, {
		cost: ["Grass"],

		name: {
			en: "Energy Straw",
			fr: "Trompe Énergie",
			es: "Trompa Energética",
			'es-mx': "Succión Energética",
			de: "Energierüssel",
			it: "Energicannuccia",
			pt: "Canudo de Energia"
		},

		effect: {
			en: "Your opponent reveals their hand, and this attack does 80 damage for each Energy card you find there.",
			fr: "Votre adversaire montre sa main. Cette attaque inflige 80 dégâts pour chaque carte Énergie que vous y trouvez.",
			es: "Tu rival enseña las cartas de su mano, y este ataque hace 80 puntos de daño por cada carta de Energía que encuentres entre ellas.",
			'es-mx': "Tu rival muestra su mano, y este ataque hace 80 puntos de daño por cada carta de Energía que encuentres en ella.",
			de: "Dein Gegner zeigt dir seine Handkarten, und diese Attacke fügt für jede Energiekarte, die du dort findest, 80 Schadenspunkte zu.",
			it: "Il tuo avversario mostra le carte che ha in mano e questo attacco infligge 80 danni per ogni carta Energia presente tra quelle carte.",
			pt: "Seu oponente revela a mão dele, e este ataque causa 80 pontos de dano para cada carta de Energia que você encontrar lá."
		},

		damage: "80×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675825,
		cardmarket: 869624
	}
}

export default card