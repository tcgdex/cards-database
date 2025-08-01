import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai",
		es: "Darkrai",
		it: "Darkrai",
		pt: "Darkrai",
		de: "Darkrai"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				es: "Hipnorrayo",
				it: "Ipnobomba",
				pt: "Borrifada Hipnótica",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Raid",
				fr: "Raid Obscur",
				es: "Asalto Siniestro",
				it: "Raid Oscuro",
				pt: "Batida Obscura",
				de: "Dunkler Raubzug"
			},
			effect: {
				en: "If your opponent has already used their GX attack, this attack does 80 more damage.",
				fr: "Si votre adversaire a déjà utilisé son attaque GX, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si tu rival ya ha usado su ataque GX, este ataque hace 80 puntos de daño más.",
				it: "Se il tuo avversario ha già usato il suo attacco GX, questo attacco infligge 80 danni in più.",
				pt: "Se o seu oponente já tiver usado o ataque GX dele(a), este ataque causará 80 pontos de dano a mais.",
				de: "Wenn dein Gegner seine GX-Attacke bereits eingesetzt hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 299489
	}
}

export default card
