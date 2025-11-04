import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [467],
	set: Set,

	name: {
		en: "Magmortar",
		fr: "Maganon",
		es: "Magmortar",
		de: "Magbrant",
		it: "Magmortar",
		pt: "Magmortar",
		'es-mx': "Magmortar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Magma Surge",
			fr: "Déferlante de Magma",
			es: "Aluvión Magma",
			de: "Magmawoge",
			it: "Ondata di Magma",
			pt: "Rebentação de Magma",
			'es-mx': "Oleada de Magma"
		},

		effect: {
			en: "During Pokémon Checkup, put 3 more damage counters on your opponent's Burned Pokémon.",
			fr: "Pendant le Contrôle Pokémon, placez 3 marqueurs de dégâts supplémentaires sur les Pokémon Brûlés de votre adversaire.",
			es: "Durante el Chequeo Pokémon, pon 3 contadores de daño más en el Pokémon Quemado de tu rival.",
			de: "Lege beim Pokémon-Check 3 Schadensmarken mehr auf die verbrannten Pokémon deines Gegners.",
			it: "Metti altri tre segnalini danno sui Pokémon bruciati del tuo avversario durante il controllo Pokémon.",
			pt: "Durante o Checape Pokémon, coloque 3 contadores de dano a mais nos Pokémon Queimados do seu oponente.",
			'es-mx': "Durante el Chequeo Pokémon, pon 3 contadores de daño más en el Pokémon Quemado de tu rival."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			es: "Llama Abrasadora",
			de: "Sengende Flammen",
			it: "Fiamme Ustionanti",
			pt: "Chama Cauterizante",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "I",
	illustrator: "Tonji Matsuno",

	thirdParty: {
		cardmarket: 817173
	},

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card