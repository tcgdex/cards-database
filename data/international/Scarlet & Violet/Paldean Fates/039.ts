import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [927],
	set: Set,

	name: {
		'en-us': "Dachsbun",
		'fr-fr': "Briochien",
		'es-es': "Dachsbun",
		'it-it': "Dachsbun",
		'pt-br': "Dachsbun",
		'de-de': "Backel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Fidough",
		'fr-fr': "Pâtachiot",
		'es-es': "Fidough",
		'it-it': "Fidough",
		'pt-br': "Fidough",
		'de-de': "Hefel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Well-Baked Body",
			'fr-fr': "Bien Cuit",
			'es-es': "Cuerpo Horneado",
			'it-it': "Bentostato",
			'pt-br': "Corpo Bem-passado",
			'de-de': "Knusperkruste"
		},

		effect: {
			'en-us': "This Pokémon can't be Burned. Prevent all damage done to this Pokémon by attacks from your opponent's {R} Pokémon.",
			'fr-fr': "Ce Pokémon ne peut pas être Brûlé. Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon {R} de votre adversaire.",
			'es-es': "Este Pokémon no puede pasar a estar Quemado. Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon {R} de tu rival.",
			'it-it': "Questo Pokémon non può venire bruciato. Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon {R} del tuo avversario.",
			'pt-br': "Este Pokémon não pode ser Queimado. Previna todo o dano causado a este Pokémon por ataques dos Pokémon {R} do seu oponente.",
			'de-de': "Dieses Pokémon kann nicht verbrannt werden. Verhindere allen Schaden, der diesem Pokémon durch Attacken von {R}-Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'de-de': "Abrupter Kopfstoß"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751576,
				tcgplayer: 534185,
				cardtrader: 274223
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751576,
				tcgplayer: 534185,
				cardtrader: 274223
			}
		},
	],

	illustrator: "You Iribi",

	description: {
		'en-us': "The pleasant aroma that emanates from this Pokémon's body helps wheat grow, so Dachsbun has been treasured by farming villages.",
	},

}

export default card
