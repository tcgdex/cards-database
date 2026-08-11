import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
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
			],
			name: {
				'en-us': "B Cancel",
				'fr-fr': "Interruption B",
				'es-es': "B Cancelar",
				'it-it': "(B) Annulla",
				'pt-br': "Cancelamento B",
				'de-de': "B"
			},
			effect: {
				'en-us': "Your opponent can't play any Pokémon from his or her hand to evolve the Defending Pokémon during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer le Pokémon Défenseur pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar al Pokémon Defensor durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare Pokémon dalla sua mano per far evolvere il Pokémon difensore durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhum Pokémon da própria mão para evoluir o Pokémon Defensor durante a próxima vez de jogar desse oponente.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Pokémon von seiner Hand spielen, um das Verteidigende Pokémon zu entwickeln."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde Folie",
				'es-es': "Rayo Confuso",
				'it-it': "Stordiraggio",
				'pt-br': "Raio da Confusão",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 30,

		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that was formed by 108 spirits. It is bound to a fissure in an odd keystone.",
	},

	thirdParty: {
		cardmarket: 281861,
		tcgplayer: 94513
	}
}

export default card
