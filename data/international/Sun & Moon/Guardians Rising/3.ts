import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'es-es': "Victreebel",
		'it-it': "Victreebel",
		'pt-br': "Victreebel",
		'de-de': "Sarzenia"
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
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Pollen Hazard",
				'fr-fr': "Pollen Dangereux",
				'es-es': "Polen Nocivo",
				'it-it': "Rischio Polline",
				'pt-br': "Pólen Perigoso",
				'de-de': "Pollengefahr"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
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
				'en-us': "Stick and Absorb",
				'fr-fr': "Colle et Absorbe",
				'es-es': "Adherirse y Absorber",
				'it-it': "Avvinghia e Assorbi",
				'pt-br': "Grudar e Absorver",
				'de-de': "Festkleben und Einsaugen"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon. The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "Cura 20 puntos de daño a este Pokémon. El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Cura questo Pokémon da 20 danni. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Cure 20 pontos de dano deste Pokémon. O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon. Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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

	description: {
		'en-us': "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
	},

	thirdParty: {
		cardmarket: 297467,
		tcgplayer: 130688
	}
}

export default card
