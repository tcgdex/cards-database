import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [212],

	name: {
		en: "Scizor ex",
		fr: "Cizayox ex",
		de: "Scherox ex",
		es: "Scizor ex",
		it: "Scizor ex",
		pt: "Scizor ex",
		'es-mx': "Scizor ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Steel Wing",
			fr: "Aile d'acier",
			de: "Stahlschwinge",
			es: "Ala de acero",
			it: "Alacciaio",
			pt: "Asa de Aço",
			'es-mx': "Ala de acero"
		},

		effect: {
			en: "During your opponent's next turn, any damage done to Scizor <em>ex</em> by attacks is reduced by 20 <em>(after applying Weakness and Resistance)</em>.",
			fr: "Lors du prochain tour de votre adversaire, les dégâts infligés à Cizayox <em>ex</em> par des attaques sont réduits de 20 <em>(après application de la Faiblesse et de la Résistance)</em>.",
			de: "Aller Schaden, der Scherox <em>ex</em> während des nächsten gegnerischen Zuges durch Angriffe zugefügt wird, wird um 20 Schadenspunkte reduziert <em>(nachdem Schwäche und Resistenz verrechnet wurden)</em>.",
			es: "Durante el siguiente turno de tu rival, cualquier daño hecho a Scizor-<em>ex</em> por ataques es reducido en 20 <em>(después de aplicar Debilidad y Resistencia)</em>.",
			it: "Durante il prossimo turno del tuo avversario, qualsiasi danno inflitto da attacchi a Scizor <em>ex</em> è ridotto di 20 <em>(</em><em>dopo aver applicato Debolezza e Resistenza)</em>.",
			pt: "Durante o próximo turno do seu oponente, qualquer dano causado ao Scizor <em>ex</em> por ataques é reduzido em 20 <em>(após aplicar Fraqueza e Resistência)</em>.",
			'es-mx': "Durante el siguiente turno de tu rival, cualquier daño infligido a Scizor-<em>ex</em> por ataques es reducido en 20 <em>(después de aplicar Debilidad y Resistencia)</em>."
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			en: "Cross-Cut",
			fr: "Coupe transversale",
			de: "Überkreuzzerschneider",
			es: "Atajar",
			it: "Fendente Incrociato",
			pt: "Corte em Cruz",
			'es-mx': "Corte cruzado"
		},

		effect: {
			en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
			de: "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu.",
			es: "Si el Pokémon Defensor es un Pokémon Evolucionado, este ataque hace 50 puntos de daño más 30 puntos de daño adicional.",
			it: "Se il Pokémon Difensore è un Pokémon Evoluto, questo attacco infligge 50 danni più altri 30 danni.",
			pt: "Se o Pokémon Defensor for um Pokémon Evoluído, este ataque causa 50 de dano mais 30 de dano adicionais.",
			'es-mx': "Si el Pokémon Defensor es un Pokémon Evolucionado, este ataque hace 50 puntos de daño más 30 puntos de daño adicional."
		},

		damage: "50+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907948,
				tcgplayer: 716206
			}
		}
	],
}

export default card