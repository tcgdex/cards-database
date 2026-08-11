import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [317],
	set: Set,

	name: {
		'en-us': "Swalot",
		'fr-fr': "Avaltout",
		'es-es': "Swalot",
		'it-it': "Swalot",
		'pt-br': "Swalot",
		'de-de': "Schlukwech"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Gulpin",
		'fr-fr': "Gloupti",
		'es-es': "Gulpin",
		'it-it': "Gulpin",
		'pt-br': "Gulpin",
		'de-de': "Schluppuck"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Devouring Mouth",
			'fr-fr': "Bouche Dévoreuse",
			'es-es': "Boca Devoradora",
			'it-it': "Bocca Divoratrice",
			'pt-br': "Bocona Devoradora",
			'de-de': "Verschlingermaul"
		},

		effect: {
			'en-us': "If this Pokémon has more Energy attached than your opponent's Active Pokémon, this attack does 160 more damage.",
			'fr-fr': "Si ce Pokémon a plus d'Énergies attachées que le Pokémon Actif de votre adversaire, cette attaque inflige 160 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene más Energía unida que el Pokémon Activo de tu rival, este ataque hace 160 puntos de daño más.",
			'it-it': "Se questo Pokémon ha più Energie assegnate del Pokémon attivo del tuo avversario, questo attacco infligge 160 danni in più.",
			'pt-br': "Se este Pokémon tiver mais Energia ligada a ele do que o Pokémon Ativo do seu oponente, este ataque causará 160 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mehr Energie angelegt ist als an das Aktive Pokémon deines Gegners, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Venomous Hit",
			'fr-fr': "Frappe Venimeuse",
			'es-es': "Golpe Venenoso",
			'it-it': "Colpo Velenoso",
			'pt-br': "Golpe Venenoso",
			'de-de': "Giftiger Schlag"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785946,
				tcgplayer: 567318
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785946,
				tcgplayer: 567318
			}
		},
	],

	illustrator: "OKACHEKE",

}

export default card
