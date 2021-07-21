import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Stunfisk",
		fr: "Limonde",
		es: "Stunfisk",
		it: "Stunfisk",
		pt: "Stunfisk",
		de: "Flunschlik"
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		618,
	],
	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Trap Bolt",
				fr: "Piège Foudre",
				es: "Rayo Trampa",
				it: "Lampotrappola",
				pt: "Armadilha de Raios",
				de: "Fallenschlag"
			},
			effect: {
				en: "If, before doing damage, your opponent’s Active Pokémon has more remaining HP than this Pokémon, this attack does 30 more damage.",
				fr: "Si, avant d’infliger des dégâts, il reste plus de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si, antes de infligir daño, al Pokémon Activo de tu rival le quedan más PS que a este Pokémon, este ataque hace 30 puntos de daño más.",
				it: "Se, prima di infliggere danni, il Pokémon attivo del tuo avversario ha più PS rimanenti di questo Pokémon, questo attacco infligge 30 danni in più.",
				pt: "Se, antes de causar dano, o Pokémon Ativo do seu oponente tiver mais PS restante do que este Pokémon, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn, bevor du Schaden zufügst, das Aktive Pokémon deines Gegners mehr verbleibende KP als dieses Pokémon hat, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

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
	retreat: 1,



}

export default card
