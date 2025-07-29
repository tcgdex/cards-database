import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		es: "Garchomp",
		it: "Garchomp",
		pt: "Garchomp",
		de: "Knakrack"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Avenging Aura",
				fr: "Aura Vengeresse",
				es: "Aura Vengadora",
				it: "Aura Vendicativa",
				pt: "Aura Vingativa",
				de: "Racheaura"
			},
			effect: {
				en: "If you have more Prize cards remaining than your opponent, this Pokémon’s attacks do 80 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "S’il vous reste plus de cartes Récompense qu’à votre adversaire, les attaques de ce Pokémon infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Si te quedan más cartas de Premio que a tu rival, los ataques de este Pokémon hacen 80 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Se hai più carte Premio rimanenti del tuo avversario, gli attacchi di questo Pokémon infliggono 80 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, os ataques deste Pokémon causarão 80 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Over Slice",
				fr: "Coupure Excessive",
				es: "Tajada Extra",
				it: "Taglio Sfrenato",
				pt: "Corte Excessivo",
				de: "Überschnitt"
			},
			effect: {
				en: "You may discard an Energy from this Pokémon. If you do, this attack does 40 more damage.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Puedes descartar 1 Energía de este Pokémon. Si lo haces, este ataque hace 40 puntos de daño más.",
				it: "Puoi scartare un’Energia assegnata a questo Pokémon. Se lo fai, questo attacco infligge 40 danni in più.",
				pt: "Você pode descartar 1 Energia deste Pokémon. Se fizer isto, este ataque causará 40 pontos de dano a mais.",
				de: "Du kannst 1 Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 40 Schadenspunkte mehr zu."
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

	retreat: 0,

	thirdParty: {
		cardmarket: 377496
	}
}

export default card
