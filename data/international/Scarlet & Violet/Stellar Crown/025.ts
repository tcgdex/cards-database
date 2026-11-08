import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [776],
	set: Set,

	name: {
		'en-us': "Turtonator",
		'fr-fr': "Boumata",
		'es-es': "Turtonator",
		'it-it': "Turtonator",
		'pt-br': "Turtonator",
		'de-de': "Tortunator"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Ring of Fire",
			'fr-fr': "Anneau de Feu",
			'es-es': "Anillo de Fuego",
			'it-it': "Anello di Fuoco",
			'pt-br': "Anel de Fogo",
			'de-de': "Feuerring"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Inferno Onrush",
			'fr-fr': "Torrent d'Enfer",
			'es-es': "Infierno Desatado",
			'it-it': "Assalto Infernale",
			'pt-br': "Investida Infernal",
			'de-de': "Inferno-Ansturm"
		},

		effect: {
			'en-us': "This Pokémon also does 60 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785878,
				tcgplayer: 567251
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785878,
				tcgplayer: 567251
			}
		},
	],

	illustrator: "AKIRA EGAWA",

}

export default card
