import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Regirock",
		fr: "Regirock",
		es: "Regirock",
		it: "Regirock",
		pt: "Regirock",
		de: "Regirock"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		377,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Enhanced Stomp",
				fr: "Piétinement Amélioré",
				es: "Pisotón Mejorado",
				it: "Superpasso",
				pt: "Pisão Acentuado",
				de: "Spezial-Stampfer"
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 20 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 20 puntos de daño más.",
				it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 20 danni in più.",
				pt: "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 20 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
				fr: "Marto-Poing",
				es: "Machada",
				it: "Martelpugno",
				pt: "Braço de Martelo",
				de: "Hammerarm"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario.",
				pt: "Descarte a primeira carta do baralho do seu oponente.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 100,

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
		cardmarket: 361325
	}
}

export default card
