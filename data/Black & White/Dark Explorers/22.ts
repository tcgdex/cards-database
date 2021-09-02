import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		it: "Volcarona",
		pt: "Volcarona",
		de: "Ramoth"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Larvesta",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scorching Scales",
				fr: "Écailles Brûlantes",
				es: "Escamas Abrasadoras",
				it: "Ustiospora",
				pt: "Escamas Ardentes",
				de: "Versengende Schuppen"
			},
			effect: {
				en: "Put 4 damage counters instead of 2 on your opponent’s Burned Pokémon between turns.",
				fr: "Placez 4 marqueurs de dégâts au lieu de 2 sur le Pokémon Brûlé de votre adversaire entre chaque tour.",
				es: "Pon 4 contadores de daño en vez de 2 en el Pokémon Quemado de tu rival entre turnos.",
				it: "Tra un turno e l’altro, metti quattro segnalini danno invece di due sul Pokémon bruciato del tuo avversario.",
				pt: "Coloque 4 marcadores de danos em vez de 2 no Pokémon Queimado do seu oponente entre as vezes de jogar.",
				de: "Lege zwischen den Zügen 4 Schadensmarken anstelle von 2 Schadensmarken auf die verbrannten Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Wind",
			},
			effect: {
				en: "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Burned.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3
}

export default card
