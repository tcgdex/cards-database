import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Ekans",
		fr: "Abo de la Team Rocket",
		de: "Team Rockets Rettan",
		it: "Ekans del Team Rocket",
		es: "Ekans del Team Rocket",
		pt: "Ekans da Equipe Rocket",
		'es-mx': "Ekans del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Drag Down",
			fr: "Traction",
			de: "Herabziehen",
			it: "Trascina Giù",
			es: "Arrastrar al Fondo",
			pt: "Arrastar pra Baixo",
			'es-mx': "Arrastre Inmovilizador"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			it: "Rosicchiamento",
			es: "Roer",
			pt: "Roída",
			'es-mx': "Mordisquear"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card