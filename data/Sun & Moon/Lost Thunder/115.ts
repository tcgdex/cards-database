import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		de: "Larvitar"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		246,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Second Strike",
				fr: "Deuxième Coup",
				es: "Segundo Golpe",
				it: "Secondocolpo",
				pt: "Segundo Golpe",
				de: "Sekundärschlag"
			},
			effect: {
				en: "If your opponent’s Active Pokémon already has 3 or more damage counters on it, this attack does 70 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà 3 marqueurs de dégâts ou plus, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene 3 o más contadores de daño sobre él, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha già tre o più segnalini danno, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já tiver 3 ou mais contadores de dano nele, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners bereits 3 oder mehr Schadensmarken liegen, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
