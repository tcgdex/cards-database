import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Xurkitree",
		fr: "Câblifère",
		es: "Xurkitree",
		it: "Xurkitree",
		pt: "Xurkitree",
		de: "Voltriant"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		796,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Three Mirrors",
				fr: "Triple Reflet",
				es: "Tres Espejos",
				it: "Tre Specchi",
				pt: "Três Espelhos",
				de: "Drei Spiegel"
			},
			effect: {
				en: "If your opponent has exactly 3 Prize cards remaining, this attack does 90 more damage.",
				fr: "S’il reste exactement 3 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si a tu rival le quedan exactamente 3 cartas de Premio, este ataque hace 90 puntos de daño más.",
				it: "Se il tuo avversario ha esattamente tre carte Premio rimanenti, questo attacco infligge 90 danni in più.",
				pt: "Se o seu oponente tiver exatamente 3 cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn dein Gegner genau 3 verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon Signal",
				es: "Doble Rayo",
				it: "Segnoraggio",
				pt: "Feixe Sinalizador",
				de: "Ampelleuchte"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 388172,
		tcgplayer: 194996
	}
}

export default card
