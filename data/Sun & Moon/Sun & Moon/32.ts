import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		es: "Poliwrath",
		it: "Poliwrath",
		pt: "Poliwrath",
		de: "Quappo"
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
		en: "Poliwhirl",
		fr: "Têtarte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Split Spiral Punch",
				fr: "Coup d’Poing en Demi Spirale",
				es: "Puño en Espiral Cortante",
				it: "Spiralpugno Squarciante",
				pt: "Soco Espiral Dividido",
				de: "Spiralhieb"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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
				en: "Wake-Up Slap",
				fr: "Réveil Forcé",
				es: "Espabila",
				it: "Svegliopacca",
				pt: "Tapa do Despertar",
				de: "Weckruf"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from that Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 80 dégâts supplémentaires. Retirez ensuite tous les États Spéciaux de ce Pokémon.",
				es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 80 puntos de daño más. Después, elimina todas las Condiciones Especiales de ese Pokémon.",
				it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 80 danni in più. Poi rimuovi tutte le condizioni speciali da quel Pokémon.",
				pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 80 pontos de dano a mais. Em seguida, remova todas as Condições Especiais daquele Pokémon.",
				de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 80 Schadenspunkte mehr zu. Alle Speziellen Zustände auf jenem Pokémon verlieren anschließend ihre Wirkung."
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

	thirdParty: {
		cardmarket: 295342,
		tcgplayer: 126903
	}
}

export default card
