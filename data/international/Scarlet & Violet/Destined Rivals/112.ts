import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [23],
	set: Set,

	name: {
		'en-us': "Team Rocket's Ekans",
		'fr-fr': "Abo de la Team Rocket",
		'de-de': "Team Rockets Rettan",
		'it-it': "Ekans del Team Rocket",
		'es-es': "Ekans del Team Rocket",
		'pt-br': "Ekans da Equipe Rocket",
		'es-mx': "Ekans del Equipo Rocket"
	},


	illustrator: "KEIICHIRO ITO",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Drag Down",
			'fr-fr': "Traction",
			'de-de': "Herabziehen",
			'it-it': "Trascina Giù",
			'es-es': "Arrastrar al Fondo",
			'pt-br': "Arrastar pra Baixo",
			'es-mx': "Arrastre Inmovilizador"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'es-es': "Roer",
			'pt-br': "Roída",
			'es-mx': "Mordisquear"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825986,
				tcgplayer: 632920
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825986,
				tcgplayer: 632920
			}
		},
	],
}

export default card
