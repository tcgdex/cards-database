import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Amoonguss ex",
		fr: "Gaulet-ex",
		es: "Amoonguss ex",
		de: "Hutsassa-ex",
		it: "Amoonguss-ex",
		pt: "Amoonguss ex",
		'es-mx': "Amoonguss ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Spore Ball",
			fr: "Boule de Spores",
			es: "Bola Espora",
			de: "Sporenbällchen",
			it: "Pallaspore",
			pt: "Bola de Esporos",
			'es-mx': "Bola Esporífera"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Champignon's Swing",
			fr: "Frappe Champignon",
			es: "Golpe Champiñón",
			de: "Champignonschwinger",
			it: "Colpo Champignon",
			pt: "Balanço do Champignon",
			'es-mx': "Champigolpe"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 80 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
