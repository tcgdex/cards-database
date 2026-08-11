import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [141],
	set: Set,

	name: {
		'fr-fr': "Kabutops",
		'en-us': "Kabutops",
		'es-es': "Kabutops",
		'it-it': "Kabutops",
		'pt-br': "Kabutops",
		'de-de': "Kabutops"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Kabuto",
		'en-us': "Kabuto",
		'es-es': "Kabuto",
		'it-it': "Kabuto",
		'pt-br': "Kabuto",
		'de-de': "Kabuto"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Méthode à l'Ancienne",
			'en-us': "Ancient Way",
			'es-es': "Modo Ancestral",
			'it-it': "Modo Antico",
			'pt-br': "À Moda Antiga",
			'de-de': "Uralte Methode"
		},

		effect: {
			'fr-fr': "La Faiblesse du Pokémon Actif de votre adversaire est de ×4.",
			'en-us': "Apply Weakness for your opponent's Active Pokémon as ×4 instead.",
			'es-es': "Aplica una Debilidad de x 4 al Pokémon Activo de tu rival.",
			'it-it': "La debolezza del Pokémon attivo del tuo avversario diventa ×4.",
			'pt-br': "Aplique Fraqueza ao Pokémon Ativo do seu oponente de ×4.",
			'de-de': "Verrechne Schwäche beim Aktiven Pokémon deines Gegners stattdessen als ×4."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Lame Siphon",
			'en-us': "Draining Blade",
			'es-es': "Cuchilla Drenaje",
			'it-it': "Assorbilama",
			'pt-br': "Lâmina Sugadora",
			'de-de': "Zehrende Klinge"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'en-us': "Heal 30 damage from this Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The cause behind the extinction of this species is unknown. Kabutops were aggressive Pokémon that inhabited warm seas.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733736,
				tcgplayer: 516704,
				cardtrader: 261234
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733736,
				tcgplayer: 516704,
				cardtrader: 261234
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	
}

export default card
