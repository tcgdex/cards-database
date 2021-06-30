import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
		es: "Victreebel",
		it: "Victreebel",
		pt: "Victreebel",
		de: "Sarzenia"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Pollen Hazard",
				fr: "Pollen Dangereux",
				es: "Polen Nocivo",
				it: "Rischio Polline",
				pt: "Pólen Perigoso",
				de: "Pollengefahr"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stick and Absorb",
				fr: "Colle et Absorbe",
				es: "Adherirse y Absorber",
				it: "Avvinghia e Assorbi",
				pt: "Grudar e Absorver",
				de: "Festkleben und Einsaugen"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon. The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Soignez 20 dégâts à ce Pokémon. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "Cura 20 puntos de daño a este Pokémon. El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Cura questo Pokémon da 20 danni. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Cure 20 pontos de dano deste Pokémon. O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon. Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
