import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'es-es': "Heatran",
		'es-mx': "Heatran",
		'de-de': "Heatran",
		'it-it': "Heatran",
		'pt-br': "Heatran"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [485],
	hp: 140,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Singe",
			'fr-fr': "Roussi",
			'es-es': "Quemadura",
			'es-mx': "Quemadura",
			'de-de': "Versengung",
			'it-it': "Scottata",
			'pt-br': "Chamuscada"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado."
		}
	}, {
		name: {
			'en-us': "Lava Wall",
			'fr-fr': "Mur de Lave",
			'es-es': "Pared de Lava",
			'es-mx': "Muro de Lava",
			'de-de': "Lavawand",
			'it-it': "Muro di Lava",
			'pt-br': "Parede de Lava"
		},

		cost: ["Fire", "Fire", "Colorless"],

		damage: 120,

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Burned Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Brûlés.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Quemados.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon Quemados a este Pokémon.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von verbrannten Pokémon zugefügt wird.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon bruciati.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Queimados."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895795,
				tcgplayer: 704764
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895795,
				tcgplayer: 704764
			}
		},
	],
}

export default card
