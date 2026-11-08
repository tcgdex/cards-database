import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'es-es': "Poliwrath",
		'it-it': "Poliwrath",
		'pt-br': "Poliwrath",
		'de-de': "Quappo"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Split Spiral Punch",
				'fr-fr': "Coup d’Poing en Demi Spirale",
				'es-es': "Puño en Espiral Cortante",
				'it-it': "Spiralpugno Squarciante",
				'pt-br': "Soco Espiral Dividido",
				'de-de': "Spiralhieb"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wake-Up Slap",
				'fr-fr': "Réveil Forcé",
				'es-es': "Espabila",
				'it-it': "Svegliopacca",
				'pt-br': "Tapa do Despertar",
				'de-de': "Weckruf"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from that Pokémon.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 80 dégâts supplémentaires. Retirez ensuite tous les États Spéciaux de ce Pokémon.",
				'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 80 puntos de daño más. Después, elimina todas las Condiciones Especiales de ese Pokémon.",
				'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 80 danni in più. Poi rimuovi tutte le condizioni speciali da quel Pokémon.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 80 pontos de dano a mais. Em seguida, remova todas as Condições Especiais daquele Pokémon.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 80 Schadenspunkte mehr zu. Alle Speziellen Zustände auf jenem Pokémon verlieren anschließend ihre Wirkung."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its percentage of body fat is nearly zero. Its body is entirely muscle, which makes it heavy and forces its swimming prowess to develop.",
	},

	thirdParty: {
		cardmarket: 295342,
		tcgplayer: 126903
	}
}

export default card
