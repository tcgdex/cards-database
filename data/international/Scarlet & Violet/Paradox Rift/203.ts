import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [988],
	set: Set,

	name: {
		'en-us': "Slither Wing",
		'fr-fr': "Rampe-Ailes",
		'es-es': "Reptalada",
		'it-it': "Alirasenti",
		'pt-br': "Asa Rasteira",
		'de-de': "Kriechflügel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Stomp Off",
			'fr-fr': "Tohu-Bohu",
			'es-es': "Pisotear",
			'it-it': "Pestatura",
			'pt-br': "Sair Irritado",
			'de-de': "Davonstapfen"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Burning Turbulence",
			'fr-fr': "Turbulence Enflammée",
			'es-es': "Turbulencia Abrasadora",
			'it-it': "Turbolenza Infuocata",
			'pt-br': "Turbulência Quente",
			'de-de': "Feuerturbulenzen"
		},

		effect: {
			'en-us': "This Pokémon also does 90 damage to itself. Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Ce Pokémon s'inflige aussi 90 dégâts. Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "Este Pokémon también se hace 90 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Questo Pokémon infligge anche 90 danni a se stesso. Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "Este Pokémon também causa 90 pontos de dano a si mesmo. O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "This mysterious Pokémon has some similarities to a creature that an old book introduced as Slither Wing.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740746,
				tcgplayer: 523884,
				cardtrader: 265555
			}
		},
	],

	illustrator: "Takeshi Nakamura",

	
}

export default card
