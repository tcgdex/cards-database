import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull",
		es: "Granbull",
		it: "Granbull",
		pt: "Granbull",
		de: "Granbull"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		210,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Dark Clamp",
				fr: "Pince des Ténèbres",
				es: "Tenaza Oscura",
				it: "Buiotenaglia",
				pt: "Grampo da Escuridão",
				de: "Dunkler Klammergriff"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fight Back",
				fr: "Rendre les Coups",
				es: "Devolver Golpe",
				it: "Lottadifesa",
				pt: "Devolver Ataque",
				de: "Zur Wehr setzen"
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon possuir contadores de dano nele, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
