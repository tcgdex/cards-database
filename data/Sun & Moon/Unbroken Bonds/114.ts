import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Sandile",
		fr: "Mascaïman",
		es: "Sandile",
		it: "Sandile",
		pt: "Sandile",
		de: "Ganovil"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		551,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grandiose Fangs",
				fr: "Crocs Grandioses",
				es: "Colmillos Grandiosos",
				it: "Fauci Imponenti",
				pt: "Presas Imponentes",
				de: "Grandioses Gebiss"
			},
			effect: {
				en: "If your opponent’s Pokémon is Knocked Out by damage from this attack, this Pokémon’s attacks do 120 more damage to your opponent’s Active Pokémon during your next turn (before applying Weakness and Resistance).",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, les attaques de ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire pendant votre prochain tour (avant application de la Faiblesse et de la Résistance).",
				es: "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, los ataques de este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival durante tu próximo turno (antes de aplicar Debilidad y Resistencia).",
				it: "Se il Pokémon del tuo avversario viene messo KO dai danni di questo attacco, gli attacchi di questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario durante il tuo prossimo turno, prima di aver applicato debolezza e resistenza.",
				pt: "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, os ataques deste Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente durante a sua próxima vez de jogar (antes de aplicar Fraqueza e Resistência).",
				de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners während deines nächsten Zuges 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 30,

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



}

export default card
