import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [986],
	set: Set,

	name: {
		'en-us': "Brute Bonnet",
		'fr-fr': "Fongus-Furie",
		'es-es': "Furioseta",
		'it-it': "Fungofurioso",
		'pt-br': "Capuz Bruto",
		'de-de': "Wutpilz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Poison Spray",
			'fr-fr': "Pulvérisation Toxique",
			'es-es': "Aerosol Venenoso",
			'it-it': "Spruzzo Velenoso",
			'pt-br': "Spray de Veneno",
			'de-de': "Giftspray"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Relentless Punches",
			'fr-fr': "Poings Acharnés",
			'es-es': "Puños Implacables",
			'it-it': "Pugni Continui",
			'pt-br': "Socos Implacáveis",
			'de-de': "Unerbittliche Hiebe"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "It is possible that the creature listed as Brute Bonnet in a certain book could actually be this Pokémon.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769292,
				tcgplayer: 550162
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769292,
				tcgplayer: 550162
			}
		},
	],

	illustrator: "danciao",

}

export default card